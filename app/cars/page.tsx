"use client";

import { CarForm, CarFormType } from "@/validation/custom/car";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddPhotoAlternate } from "@mui/icons-material";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import addCarAction from "../server-actions/car/addCar";

export default function Cars() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const { data } = useSession();

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<CarFormType>({
    resolver: zodResolver(CarForm),
    defaultValues: {
      brand: "",
      model: "",
      mileage: 0,
      licensePlate: "",
      year: 0,
      color: "",
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<CarFormType> = async (
    formData: CarFormType,
  ) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("FormData", formData);
    }
    try {
      const actionResult = await addCarAction(formData);
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
          Register your car with an image!
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="brand"
          render={({ field }) => (
            <TextField
              {...field}
              label="Brand"
              helperText={errors.brand?.message}
              error={!!errors.brand}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="model"
          render={({ field }) => (
            <TextField
              {...field}
              label="Model"
              helperText={errors.model?.message}
              error={!!errors.model}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="year"
          render={({ field }) => (
            <TextField
              {...field}
              label="Year"
              type="number"
              helperText={errors.year?.message}
              error={!!errors.year}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="mileage"
          render={({ field }) => (
            <TextField
              {...field}
              label="Mileage"
              type="number"
              helperText={errors.mileage?.message}
              error={!!errors.mileage}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="licensePlate"
          render={({ field }) => (
            <TextField
              {...field}
              label="License Plate"
              helperText={errors.licensePlate?.message}
              error={!!errors.licensePlate}
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="color"
          render={({ field }) => (
            <TextField
              {...field}
              label="Color "
              helperText={errors.color?.message}
              error={!!errors.color}
              fullWidth
            />
          )}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
