
import type { Metadata } from "next";
import React from "react";
import DisplayProductComponent from "@/components/products/DisplayProductComponent";
import FetchCar from "@/lib/api";
import { CarData } from "@/lib/car-type";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Product Page",
    openGraph: {
      title: "Car Selling - Product Page",
      description: "This is product page of car selling",
      images: [
        {
          url: 'https://leasecar.uk/images/main/cars/2/2/102123/corsa-front.jpeg',
          width: 800,
          height: 600,
          alt: "Car selling platform",
          type: 'image/png'
        }
      ]
    }
  };
}

const ProductPage = async () => {
  const data: CarData[] = await FetchCar(0, 5);

  return (
    <div>
      <DisplayProductComponent
        tagline={'Latest Updates'}
        heading={'New Coming'}
        description={'Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'}
        buttonText={'View all cars'}
        buttonUrl={''}
        posts={data}
      />
    </div>
  );
};

export default ProductPage;
