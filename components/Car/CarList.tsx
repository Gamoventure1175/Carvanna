"use client";

import { ExtendedCarType } from "@/validation/custom/schemas";
import { Box } from "@mui/material";
import CarCard from "./CarCard";

type CarListProps = {
  carsDataArray: ExtendedCarType[];
};

export default function CarList({ carsDataArray }: CarListProps) {
  return (
    <Box>
      {carsDataArray &&
        carsDataArray.map((carData) => (
          <CarCard key={carData.id} {...carData} />
        ))}
    </Box>
  );
}
