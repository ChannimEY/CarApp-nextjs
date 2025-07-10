
import type { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog Page",
    description: "Explore all blog posts about car selling and trends.",
    openGraph: {
      title: "Blog Page | Car Selling",
      description: "Explore all blog posts about car selling and trends.",
      images: [
        {
          url: 'https://leasecar.uk/images/main/cars/2/2/102123/corsa-front.jpeg',
          width: 800,
          height: 600,
          alt: "Blog Car Image",
          type: 'image/png',
        }
      ]
    }
  };
}


export default async function BlogPage() {
  return (
    <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      blog
    </div>
  );
}
