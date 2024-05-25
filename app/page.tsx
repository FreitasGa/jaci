"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      localStorage.setItem("position", JSON.stringify(position));
    });
  }, []);

  return (
    <main className="container flex flex-col min-h-[100dvh] mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1>Home</h1>
    </main>
  );
}
