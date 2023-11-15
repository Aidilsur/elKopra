import { useQuery } from "@tanstack/react-query";
import baseApi from "@/lib/axios";
import toast from "react-hot-toast";

export const useGetNews = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await baseApi.get(
        "/everything?q=tesla&from=2023-10-15&sortBy=publishedAt&apiKey=ae9d63e642a2462f9304889476937b12",
      );

      return res?.data.articles;
    },
    onError: async () => {
      toast.error(`something wrong`);
    },
  });

  return { data, isLoading };
};
