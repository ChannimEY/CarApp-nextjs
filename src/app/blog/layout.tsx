
import { Suspense } from "react"
import "../globals.css"

import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"
import { Metadata } from "next";
export const metadata: Metadata = {

   title:{
      template:'%s |Car Selling',
      default: "Blog Page"
   },
  openGraph:{
    title:'Blog page',
    description:'This is Blog page',
    images:[
     {
      url:'https://www.carscoops.com/wp-content/uploads/2020/05/bugatti-chiron-pur-sport-0-1.jpg',
      width: 800,
      height: 650,
      alt: "Car",
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