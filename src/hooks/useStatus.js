import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export const useStatus = ({ url, options }) => {
  const { data, error, isLoading } = useSWR([url, options], ([url, options]) =>
    fetcher(url, options)
  );

  return {
    status: data,
    error,
    isLoading,
  };
};
