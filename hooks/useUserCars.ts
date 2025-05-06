import api from "@/lib/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function useUserCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await api.get("/api/get-user-cars");
      return response.data;
    },
    stateTime: 1000 * 6 * 6,
  });
}
