
import React from 'react'
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Page",
    openGraph: {
      title: "About Page | Car Seller",
      description: "This is the About page for our car selling platform.",
      images: [
        {
          url: 'https://www.carpro.com/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg',
          width: 800,
          height: 650,
          alt: "Car",
          type: 'image/png'
        }
      ]
    }
  };
}

export default function AboutPage() {
  return (
    <div>About Page</div>
  )
}
