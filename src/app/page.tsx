import LatestBlogs from "@/components/latestBlogs/LatestBlogs";
import { TBlog } from "@/components/types/blogType";
import BlogCard from "@/components/ui/BlogCard";
import LatestBlogCard from "@/components/ui/LatestBlogCard";
import { GetStaticProps } from "next";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return <LatestBlogs blogs={blogs} />;
};

export default HomePage;
