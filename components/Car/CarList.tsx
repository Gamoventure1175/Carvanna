"use client";

import useCars from "@/hooks/fetchCars";
import CarCard from "./CarCard";

const CarList = () => {
  const { carsData } = useCars();

  carsData.map((carData) => {
    console.log(carData);
  });

  return (
    <div className="flex flex-wrap gap-3">
      {Array.isArray(carsData) &&
        carsData.map((carData) => {
          return <CarCard key={carData.id} carData={carData} />;
        })}
    </div>
  );
};

export default CarList;
