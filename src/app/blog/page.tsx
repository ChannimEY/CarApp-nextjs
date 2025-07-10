
// "use client"
// import BlogComponent from "@/components/BlogComponent";
// import { BlogType } from "@/lib/blog";


export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | Car Selling',
      default: 'Blog Page',
    },
    openGraph: {
      title: 'Blog page',
      description: 'This is Blog page',
      images: [
        {
          url: 'https://www.carscoops.com/wp-content/uploads/2020/05/bugatti-chiron-pur-sport-0-1.jpg',
          width: 800,
          height: 650,
          alt: 'Car',
          type: 'image/png',
        },
      ],
    },
  };
}



import { Metadata } from "next";
// import Link from "next/link";
// import { use } from "react";

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
// fetchData
// async function fetchData(){
//     await new Promise(resolve => setTimeout(resolve,3000));
//     const res = await fetch(BASE_URL);
//     const dataRes = res.json();
//     return dataRes;
// }

export const metadata:Metadata ={
    title:"Blog",
    description:"this is blog page"
}



export default async function BlogPage(){

    // const res = await fetch(BASE_URL);
    // const dataRes:BlogType[] = await res.json();

    return (
     <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

        {/* {
        dataRes.map((post)=>(
            <Link href={`/blog/${post.id} `} key={post.id}>
            <BlogComponent key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body}/>
            </Link>
        ))
     } */}
     blog
     </div>

    )
}