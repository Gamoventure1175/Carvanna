"use client";

import { signUpSchema, signUpSchemaType } from "@/validation/custom/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpSchemaType>({
    defaultValues: {
      password: "",
      username: "",
      email: "",
    },
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<signUpSchemaType> = async (data) => {
    if (process.env.NODE_ENV !== "production") console.log(data);
    try {
      const res = await signIn("credentials", {
        username: data.username!,
        email: data.email!,
        password: data.password!,
        redirect: false,
      });
      if (res?.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ width: "400px", mx: "auto", my: 20 }}>
      <Typography variant="h2" sx={{ my: 2, textAlign: "center" }}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Button
          variant="contained"
          sx={{ fontSize: ".7em" }}
          startIcon={<GoogleIcon />}
          onClick={async () =>
            await signIn("google", { callbackUrl: "/dashboard" })
          }
        >
          SIGN IN WITH GOOGLE
        </Button>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              helperText={errors?.username?.message}
              error={!!errors?.username}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              helperText={errors?.email?.message}
              error={!!errors?.email}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              helperText={errors?.password?.message}
              error={!!errors?.password}
            />
          )}
        />
        <Button type="submit" variant="contained" sx={{ fontSize: ".7em" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
