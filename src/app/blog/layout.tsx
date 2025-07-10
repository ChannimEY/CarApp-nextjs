
import { Suspense } from "react"
import "../globals.css"
import type { Metadata } from "next";

import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"
export const metadata: Metadata = {

   title:{
      template:'%s | Car Selling',
      default: "BlogPage"

   },
  openGraph:{
    title:'Car Selling',
    description:'This is blog page of car selling',
    images:[
     {
      url:'https://leasecar.uk/images/main/cars/2/2/102123/corsa-front.jpeg',
      width: 800,
      height: 600,
      alt: "Car selling platform",
      type: 'image/png'
     }
    ]
  }
};

export default function BlogLayout(
    {children}:{children: React.ReactNode}
){
    return(
        <div className="flex justify-center items-center">
              <StyledComponentsRegistry>
                <Suspense fallback={<BlogListSkeleton/>}>
                    {children}
                </Suspense>
        </StyledComponentsRegistry>
        </div>
    )
}