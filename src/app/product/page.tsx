
import DisplayProductComponent from '@/components/products/DisplayProductComponent'
import FetchCar from '@/lib/api'
import { CarData } from '@/lib/car-type'
import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {

   title:{
      template:'%s | Car Selling',
      default: "Product Page"
   },
  openGraph:{
    title:'Products page',
    description:'THis is Product page',
    images:[
     {
      url:'https://leasecar.uk/images/main/cars/2/2/102123/corsa-front.jpeg',
      width: 800,
      height: 650,
      alt: "Car",
      type: 'image/png'
     }
    ]
  }
};
const ProductPage = async () => {
  const  data:CarData[] = await FetchCar(0,5)
  console.log(data)
  return (
    <div>
      {/* <SWRComponent/> */}
      <DisplayProductComponent tagline={'Latest Updates'} heading={'New Comming'} description={'Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'} buttonText={'View all cars'} buttonUrl={''} posts={data}/>
    </div>
  )
}

export default ProductPage
