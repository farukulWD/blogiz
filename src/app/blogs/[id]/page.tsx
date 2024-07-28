import { TBlog } from "@/components/types/blogType";
import BlogDetails from "@/components/ui/BlogDetails";
import React from "react";

export async function generateStaticParams() {
  const blog = await fetch("http://localhost:5000/blogs").then((res) =>
    res.json()
  );

  return blog.map((blog: TBlog) => ({
    id: blog.id,
  }));
}

export default async function SingleBlog({
  params,
}: {
  params: { id: String };
}) {
  const id = params?.id;
  const res = await fetch(`http://localhost:5000/blogs/${id}`, {
    cache: "no-store",
  });
  const blog: TBlog = await res.json();

  return (
    <div className="my-5">
      <BlogDetails blog={blog} />
    </div>
  );
}
