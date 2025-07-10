
import { Suspense } from "react"
import "../globals.css"
import type { Metadata } from "next";

import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | Car Selling',
      default: 'Product Page',
    },
    openGraph: {
      title: 'Products page',
      description: 'This is the Product page',
      images: [
        {
          url: 'https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg',
          width: 800,
          height: 650,
          alt: 'Car',
          type: 'image/png',
        },
      ],
    },
  };
}

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