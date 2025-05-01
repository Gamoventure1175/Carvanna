"use client";

import SignUpAction from "@/app/server-actions/auth/signUp/signUp";
import { getSession, signIn } from "next-auth/react";
import {
  otpSchema,
  signUpSchemaType,
  signUpStepsSchema,
} from "@/validation/custom/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formFields = ["username", "password", "email", "otp"] as const;

export default function SignUp() {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Partial<signUpSchemaType>>({});
  const fullSchema = useMemo(() => {
    return signUpStepsSchema
      .reduce((acc, schema) => acc.merge(schema), z.object({}))
      .merge(otpSchema);
  }, []);

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<signUpSchemaType & { otp?: string }>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      otp: "",
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<signUpSchemaType> = async (data) => {
    const finalData = { ...formData, ...data };
    const otpValue = getValues("otp");

    try {
      const verifyRes = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: finalData.email, otp: otpValue }),
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        alert("Invalid or expired OTP");
        throw Error("Error verifying the OTP");
      }
      const result = await SignUpAction(
        finalData as { email: string; password: string; username: string },
      );
      console.log("User Signed Up", result);

      const res = await signIn("credentials", {
        redirect: false,
        email: finalData.email!,
        password: finalData.password!,
        username: finalData.username!,
      });

      if (res?.ok) {
        router.push("/onboarding");
      } else {
        throw Error("Sign in failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = async () => {
    const currentField = formFields[step];
    const isValid = await trigger(currentField, { shouldFocus: true });
    if (!isValid) return;

    const value = getValues(currentField);
    setFormData((prev) => ({
      ...prev,
      [currentField]: getValues(currentField),
    }));

    if (currentField === "email") {
      try {
        const res = await fetch("/api/auth/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: value,
            username: getValues("username"),
          }),
        });

        const data = await res.json();
        if (data.success) {
          setIsOtpSent(true);
          setStep((prev) => prev + 1);
        } else {
          alert("Failed to send OTP");
        }
      } catch (error) {
        console.error("OTP send error:", error);
        alert("Something went wrong!");
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <Box sx={{ width: "400px", mx: "auto", my: 20 }}>
      <Typography variant="h2" sx={{ my: 2 }}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />
        )}
        {step === 1 && (
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        )}
        {step === 2 && (
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        )}
        {step === 3 && (
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Otp"
                fullWidth
                error={!!errors.otp}
                helperText={errors.otp?.message}
              />
            )}
          />
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          {step > 0 && (
            <Button variant="outlined" color="primary" onClick={handleBack}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={step === 3 ? handleSubmit(onSubmit) : handleNext}
          >
            {step === 3 ? "Submit" : "Next"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
