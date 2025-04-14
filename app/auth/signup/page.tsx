"use client";

import {
    signUpSchemaType,
    signUpStepsSchema,
} from "@/validation/custom/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { set } from "zod";

const formFields = ['username', 'password', 'email'] as const

export default function SignUp() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<Partial<signUpSchemaType>>({});
    const mergedSchema = useMemo(
        () => signUpStepsSchema.reduce((acc, schema) => acc.merge(schema)),
        []
    )

    const {
        control,
        handleSubmit,
        trigger,
        getValues,
        formState: { errors },
    } = useForm<signUpSchemaType>({
        resolver: zodResolver(mergedSchema),
        defaultValues: {
            username: "",
            password: "",
            email: "",
        },
        mode: 'onTouched'
    });

    const onSubmit: SubmitHandler<signUpSchemaType> = (data) => {
        const finalData = { ...formData, ...data };
        console.log("Submitted:", finalData);
    };

    const handleNext = async () => {
        const currentField = formFields[step];
        const isValid = await trigger(currentField, { shouldFocus: true });
        if (isValid) {
            setFormData((prev) => ({ ...prev, [currentField]: getValues(currentField) }));
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
                                label='Username'
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
                                label='Password'
                                type='password'
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
                                label='Email'
                                type='email'
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email?.message}
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
                        onClick={step === 2 ? handleSubmit(onSubmit) : handleNext}
                    >
                        {step === 2 ? "Submit" : "Next"}
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
