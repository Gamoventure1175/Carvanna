import { Car } from "./Car"

export type FetchCarInfoHookProps = {
    carsData: Car[];
    loading: boolean;
    error: any;
}

export type FetchCarInfoByIdHookProps = {
    carData: Car | undefined;
    loading: boolean;
    error: any;
}