import { News } from "../types";

export async function fetchNews(): Promise<News[] | null> {
  const response = await fetch("/api/news", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
