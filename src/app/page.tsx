"use client";
import UpComingMatches from "@/components/UpComingMatches";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/hooks/api/queryClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <QueryClientProvider client={queryClient}>
        <UpComingMatches />
      </QueryClientProvider>
    </main>
  );
}
