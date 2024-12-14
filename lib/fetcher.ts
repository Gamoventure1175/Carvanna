import axios from "axios";
import axiosInstance from "./axios";

const fetcher = async <T>(url: string):Promise<T> => {
    try {
        const response = await axiosInstance.get<T>(url);
        return response.data
    } catch (error) {
        console.error('Some error occured: ', error)
        throw error;
    }

};

export default fetcher;