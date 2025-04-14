"use client";

import useCarById from "@/hooks/fetchCarById";

type CarDetailProps = {
  carId: string;
};

export default function CarDetail({ carId }: CarDetailProps) {
  const { carData, loading, error } = useCarById(carId);

  return (
    <div>
      <h1>
        {carData?.make} {carData?.model}
      </h1>
      <p>{carData?.year}</p>
    </div>
  );
}
