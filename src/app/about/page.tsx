
import React from 'react'
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | Car Selling',
      default: 'About Page',
    },
    openGraph: {
      title: 'About page',
      description: 'This is About page',
      images: [
        {
          url: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
          width: 800,
          height: 650,
          alt: 'Car',
          type: 'image/png',
        },
      ],
    },
  };
}

export default function AboutPage() {
  return <div>About Page</div>;
}
