import { News } from "../types";

export async function fetchNews(): Promise<News[] | null> {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/news";

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
