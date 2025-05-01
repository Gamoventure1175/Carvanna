"use client";

import {
  NonOauthAccount,
  NonOauthAccountType,
  OauthOnlyAccount,
  OauthOnlyAccountType,
} from "@/validation/custom/onBoardData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Box, TextField, Typography, Button } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import onBoard from "../server-actions/auth/onBoarding/onBoarding";
import { useRouter } from "next/navigation";

export default function OnBoarding() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const isOauth = session?.user?.oauthOnly;

  const user = session?.user;

  const resolver = isOauth
    ? zodResolver(OauthOnlyAccount)
    : zodResolver(NonOauthAccount);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<OauthOnlyAccountType | NonOauthAccountType>({
    resolver,
    defaultValues: {
      password: "",
      driversLicense: "",
      location: "",
      phone: "",
      name: "",
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<
    OauthOnlyAccountType | NonOauthAccountType
  > = async (data) => {
    if (process.env.NODE_ENV !== "production") console.log(data);

    try {
      const result = await onBoard(data);
      if (result) {
        console.log("Profile setup complete");
        await signIn("google", { callbackUrl: "/dashboard" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ maxWidth: "1200px", my: 20, mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ my: 2 }}>
          Setup your profile before you continue
        </Typography>
        <Box sx={{ my: 3 }}>
          {user?.profileImageUrl && (
            <Avatar
              src={user?.profileImageUrl}
              sx={{
                width: 64,
                height: 64,
                border: "2px solid",
                borderColor: "primary",
              }}
            />
          )}
          {!user?.profileImageUrl && (
            <Avatar
              sx={{
                width: 64,
                height: 64,
                border: "2px solid",
                borderColor: "primary",
                fontSize: "1.5em",
                backgroundColor: "secondary.main",
              }}
            >
              {user?.username[0].toUpperCase()}
            </Avatar>
          )}
        </Box>
      </Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 grid-rows-2 gap-3"
      >
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              helperText={
                isOauth && "password" in errors
                  ? errors.password?.message
                  : undefined
              }
              error={isOauth && "password" in errors}
              fullWidth
              sx={{ display: isOauth ? "block" : "none" }}
            />
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              helperText={errors.name?.message}
              error={!!errors.name}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="driversLicense"
          render={({ field }) => (
            <TextField
              {...field}
              label="Drivers License"
              helperText={errors.driversLicense?.message}
              error={!!errors.driversLicense}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              helperText={errors.phone?.message}
              error={!!errors.phone}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="location"
          render={({ field }) => (
            <TextField
              {...field}
              label="Location"
              helperText={errors.location?.message}
              error={!!errors.location}
              fullWidth
            />
          )}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            fontSize: ".7em",
            my: 2,
            gridRow: "3",
            gridColumn: "1",
            width: "20%",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
