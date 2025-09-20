import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const SERVER_URL = "https://newadmin-u8tx.onrender.com";
const POSTS_PER_PAGE = 6; // ✅ 6 per page

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${SERVER_URL}/api/blogs`);
        if (res.data?.success && Array.isArray(res.data.data)) {
          const mapped = res.data.data.map((blog) => ({
            _id: blog._id,
            title: blog.title,
            excerpt: blog.description.replace(/<[^>]+>/g, ""),
            date: new Date(blog.createdAt || blog.updatedAt).toLocaleDateString(),
            author: blog.author || "SUSNAVA Team",
            readTime: blog.readTime || "5 min read",
            image:
              blog.image && blog.image.startsWith("http")
                ? blog.image
                : "/images/services/BlogImages/default.png",
          }));
          setPosts(mapped);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  // ✅ Pagination Logic
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest from Our Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest insights, trends, and innovations in engineering,
              sustainability, and power systems from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {currentPosts.map((post) => (
          <Card
            key={post._id}
            className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 overflow-hidden p-4"
          >
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
              </div>
              <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ✅ Pagination Controls */}
      <div className="flex justify-center items-center mt-10 space-x-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </Button>

        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
