import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 0,
    },
  },
});

export default queryClient;
