"use client";

import { ExtendedCarType } from "@/validation/custom/schemas";
import { useEffect, useState } from "react";
import { getUserCars } from "../server-actions/car/getUserCars";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import CarList from "@/components/Car/CarList";
import { CarContextProvider, useCarForm } from "@/context/CarFormContext";
import { ServiceLogFormContextProvider } from "@/context/ServiceLogFormContext";
import CarFormModal from "@/components/Car/AddCar";

function DashBoardContent({ cars }: { cars: ExtendedCarType[] }) {
  const { isCarFormOpen, setIsCarFormOpen } = useCarForm()

  return (
    <Box sx={{ maxWidth: "1200px", my: 20 }}>
      {cars.length === 0 && (
        <Box>
          <Typography variant="h2">Add your car</Typography>
          <Button
            onClick={() => setIsCarFormOpen(true)}
            sx={{ p: 3, fontSize: 50, display: "flex", alignItems: "center" }}
            variant="contained"
          >
            <Add sx={{ fontSize: "inherit" }} />
          </Button>
        </Box>
      )}
      {cars && (
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

      {isCarFormOpen === true && (
        <CarFormModal />
      )}
    </Box>
  )
}

export default function Dashboard() {
  const [cars, setCars] = useState<ExtendedCarType[]>([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getUserCars();
        console.log(response);
        setCars(
          response.map((car) => ({
            ...car,
            mileage: car.mileage ?? 0,
            color: car.color ?? "Unknown",
          })),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };
    fetchCars();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ my: 20 }}>
        <Typography variant="h2">Your cars are loading...</Typography>
      </Box>
    );
  }

  return (
    <CarContextProvider>
    <ServiceLogFormContextProvider>
      <DashBoardContent cars={cars} />
    </ServiceLogFormContextProvider>
    </CarContextProvider>
  );
}
