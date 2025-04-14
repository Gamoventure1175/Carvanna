"use client";

import { Car } from "@/types/Car";
import { FetchCarInfoHookProps } from "@/types/FetchCarInfoHook";
import { useState, useRef, useEffect } from "react";

const useCars = (): FetchCarInfoHookProps => {
  const [carsData, setCarsData] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setLoading(true);

      try {
        const res = await fetch("/api/cars", {
          signal: abortControllerRef.current.signal,
        });
        if (!res.ok) {
          throw Error("Could not fetch Cars");
        }
        const rawData = await res.json();
        const data = rawData.data as Car[];
        setCarsData(data);

        console.log("Cars successfully fetched");
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

    fetchCars();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  return { carsData, loading, error };
};

export default useCars;
