async function fetchNews() {
  const params = new URLSearchParams({
    apiKey: process.env.NEWS_API_KEY!,
    country: "br",
    category: "health",
    q: "dengue",
  });

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.search = params.toString();

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function GET() {
  try {
    const result = await fetchNews();

    const res = result.articles.map((article: any) => {
      return {
        author: article.author,
        title: article.title,
        url: article.url,
      };
    });

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal server error", { status: 500 });
  }
}
