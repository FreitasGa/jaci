import { News } from "../types";

export async function fetchNews(): Promise<News[] | null> {
  const params = new URLSearchParams({
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY!,
    country: "br",
    category: "health",
    q: "dengue",
  });

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.search = params.toString();

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || data.status !== "ok" || data.totalResults <= 0) {
    return null;
  }

  return data.articles.map((article: any): News => {
    return {
      author: article.author,
      title: article.title,
      url: article.url,
    };
  });
}
