"use client";

import addServiceLogAction from "@/app/server-actions/service/addServiceLog";
import { useServiceLogForm } from "@/context/ServiceLogFormContext";
import {
  serviceLogFormSchema,
  serviceLogFormSchemaType,
} from "@/validation/custom/serviceLog";
import { ServiceType } from "@/validation/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { Close, X } from "@mui/icons-material";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CarServiceLog({
  carId,
  brand,
  model,
}: {
  carId: string;
  brand: string;
  model: string;
}) {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [raiseToast, setRaiseToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { isServiceLogFormOpen, setIsServiceLogFormOpen } = useServiceLogForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<serviceLogFormSchemaType>({
    defaultValues: {
      serviceTypeId: 0,
      carId: carId,
      mileageAtTime: 0,
      serviceDate: new Date(),
      notes: "",
    },
    resolver: zodResolver(serviceLogFormSchema),
  });

  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const result = await fetch("/api/service-types");
        const response = await result.json();
        setServiceTypes(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServiceTypes();
  }, []);

  const onSubmit: SubmitHandler<serviceLogFormSchemaType> = async (data) => {
    if (process.env.NODE_ENV !== "production") console.log("data", data);
    try {
      const result = await addServiceLogAction(data);
      if (result.success) {
        setToastMessage(result.message);
        setRaiseToast(true);
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production")
        console.error("Could not add the service log");
      throw error;
    }
  };

  return (
    <Dialog
      open={isServiceLogFormOpen}
      onClose={() => setIsServiceLogFormOpen(false)}
      maxWidth="md"
    >
      <DialogTitle>
        <Typography>Add a service for {brand + " " + model}</Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Controller
            control={control}
            name="serviceTypeId"
            render={({ field }) => (
              <FormControl
                sx={{ width: "100%" }}
                error={!!errors?.serviceTypeId}
              >
                <InputLabel id="sevice-type-select">Service Type</InputLabel>
                <Select
                  {...field}
                  labelId="service-type-select"
                  id="service-type-select"
                  fullWidth
                  label="Service Type"
                >
                  {serviceTypes.map((serviceType) => (
                    <MenuItem key={serviceType.id} value={serviceType.id}>
                      {serviceType.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors?.serviceTypeId?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="mileageAtTime"
            render={({ field }) => (
              <TextField
                {...field}
                label="Current Mileage"
                error={!!errors?.mileageAtTime}
                helperText={errors?.mileageAtTime?.message}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="serviceDate"
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  value={dayjs(field.value)}
                  label="Last Service Date"
                  onChange={(newValue) => {
                    if (newValue) {
                      field.onChange(newValue.toDate());
                    }
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.serviceDate,
                      helperText: errors?.serviceDate?.message,
                    },
                  }}
                />
              </LocalizationProvider>
            )}
          />
          <Controller
            control={control}
            name="notes"
            render={({ field }) => (
              <TextField
                variant="standard"
                {...field}
                label="Notes"
                fullWidth
                error={!!errors?.notes}
                helperText={errors?.notes?.message}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={() => setIsServiceLogFormOpen(false)}
          >
            <Close sx={{ fontSize: 30 }} />
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
      <Snackbar
        open={raiseToast}
        autoHideDuration={6000}
        onClose={() => setRaiseToast(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}
