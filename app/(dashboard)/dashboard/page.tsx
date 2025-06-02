"use client";

import {
  ExtendedCarSchema,
  ExtendedCarType,
} from "@/validation/custom/schemas";
import { Box, Button, Typography } from "@mui/material";
import { Add, AddBox } from "@mui/icons-material";
import CarList from "@/components/Car/CarList";
import { CarContextProvider, useCarForm } from "@/context/CarFormContext";
import { ServiceLogFormContextProvider } from "@/context/ServiceLogFormContext";
import CarFormModal from "@/components/Car/AddCar";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios/axiosInstance";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { z } from "zod";
import Loader from "@/components/UI/Loader";

function DashBoardContent({ cars }: { cars: ExtendedCarType[] }) {
  const { isCarFormOpen, setIsCarFormOpen } = useCarForm();


  return (
    <Box sx={{ maxWidth: "1200px", height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
      {(!cars || cars.length === 0) && (
        <Box>
          <Button
            onClick={() => setIsCarFormOpen(true)}
            sx={{ p: 2, fontSize: 50, borderRadius: 6, gap: 3 }}
            variant="contained"
          >
            <AddBox sx={{ fontSize: "inherit" }} />
            <Typography variant='h4'>Add your car</Typography>
          </Button>
        </Box>
      )}
      {(cars && cars.length !== 0) && (
        <Box>
          <CarList carsDataArray={cars} />
          <Box>
            <Typography variant="h2">Add another car</Typography>
            <Button
              onClick={() => setIsCarFormOpen(true)}
              sx={{ p: 3, fontSize: 50, display: "flex", alignItems: "center" }}
              variant="contained"
            >
              <Add sx={{ fontSize: "inherit" }} />
            </Button>
          </Box>
        </Box>
      )}

      {isCarFormOpen === true && <CarFormModal />}
    </Box>
  );
}

export default function Dashboard() {
  const {
    data: cars = [],
    isLoading,
    error,
  } = useQuery<ExtendedCarType[]>({
    queryKey: ["userCars"],
    queryFn: async () => {
      const response = await api.get("/cars");
      const validatedCarArray = validateWithSchema(
        z.array(ExtendedCarSchema),
        response.data,
      );
      return validatedCarArray;
    },
    staleTime: 1000 * 60 * 5,
    // refetchOnWindowFocus: true
  });

  if (isLoading && !cars) {
    return (
      <Loader />
    );
  }

  if (error) {
    if (process.env.NODE_ENV === "production")
      console.log("This error occured: ", error);
  }

  return (
    <CarContextProvider>
      <ServiceLogFormContextProvider>
        <DashBoardContent cars={cars} />
      </ServiceLogFormContextProvider>
    </CarContextProvider>
  );
}
