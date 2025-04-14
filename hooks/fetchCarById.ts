"use client";

import { Car } from "@/types/Car";
import { FetchCarInfoByIdHookProps } from "@/types/FetchCarInfoHook";
import { useState, useRef, useEffect } from "react";

const useCarById = (carId: string): FetchCarInfoByIdHookProps => {
  const [carData, setCarData] = useState<Car | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchCar = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setLoading(true);

      try {
        const res = await fetch(`/api/cars/${carId}`, {
          signal: abortControllerRef.current.signal,
        });
        if (!res.ok) {
          throw Error(`Could not fetch Car with Id:${carId}`);
        }
        const rawData = await res.json();
        const data = rawData.data as Car;
        setCarData(data);

        console.log(`Car with Id:${carId} successfully fetched`);
      } catch (err: any) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Aborted the previous request");
            return;
          }
          console.error(err);
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCar();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  return { carData, loading, error };
};

export default useCarById;
