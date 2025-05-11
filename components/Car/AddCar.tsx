"use client";

import { CarForm, CarFormType } from "@/validation/custom/car";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import addCarAction from "@/app/server-actions/car/addCar";
import { useCarForm } from "@/context/CarFormContext";
import { useRouter } from "next/navigation";

export default function CarFormModal() {
  const { data } = useSession();
  const { isCarFormOpen, setIsCarFormOpen } = useCarForm();
  const { push } = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
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

  const onSubmit: SubmitHandler<CarFormType> = async (formData) => {
    try {
      await addCarAction(formData);
      reset();
      setIsCarFormOpen(false);
      push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={isCarFormOpen}
      onClose={() => setIsCarFormOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Register your car with an image!</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2}>
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
                  label="Color"
                  helperText={errors.color?.message}
                  error={!!errors.color}
                  fullWidth
                />
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsCarFormOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
