import type { Metadata } from "next";
import { CarouselDApiDemo } from "@/components/(landing)/carousel/CarouselComponent";
import { MarqueeDemo } from "@/components/(landing)/testimonial/TestimonialComponent";
import { HeroVideoDialogDemo } from "@/components/(landing)/VideoComponent/VideoComponent";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Welcome to the best car selling platform!",
    openGraph: {
      title: "Home | Car Selling",
      description: "Explore top cars and services on our homepage.",
      images: [
        {
          url: "https://northfleet.in/wp-content/uploads/2024/10/Types-of-Cars-in-India.webp",
          width: 800,
          height: 600,
          alt: "Car selling platform",
        }
      ],
    },
  };
}

export default function Home() {
  return (
    <div>
      <CarouselDApiDemo />
      <MarqueeDemo />
      <HeroVideoDialogDemo />
    </div>
  );
}
