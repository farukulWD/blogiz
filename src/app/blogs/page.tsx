import { TBlog } from "@/components/types/blogType";
import BlogCard from "@/components/ui/BlogCard";
import React from "react";

export default async function BlogsPage() {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs: TBlog[] = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        All <span className="text-accent">Blogs</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id as string} blog={blog} />
        ))}
      </div>
    </div>
  );
}
