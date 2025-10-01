import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AdminSidebar from "./AdminSidebar";

const PAGE_SIZE = 5; // Number of blogs per page

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://susnavabackend.onrender.com/api/blogs");
      const data = await res.json();
      if (data.success) setBlogs(data.data);
    } catch (e) {
      alert("Failed to fetch blogs");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`https://susnavabackend.onrender.com/api/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      } else {
        alert("Failed to delete blog");
      }
    } catch {
      alert("Error deleting blog");
    } finally {
      setDeleting(null);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/blogedit/${id}`);
  };

  const handleAdd = () => {
    navigate(`/admin/addnewblog`);
  };

  // Filter blogs by search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (loading) return <p className="p-6">Loading blogs...</p>;

  return (
    <div className="flex min-h-screen bg-green-50">
      <AdminSidebar />
      <main className="flex-1 p-6 max-w-6xl overflow-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h1 className="text-3xl font-bold text-green-900">Blogs List</h1>
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
            className="px-4 py-2 border border-green-300 rounded w-full max-w-md"
          />
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-tr from-green-600 to-green-400 text-white whitespace-nowrap"
          >
            + Add New Blog
          </Button>
        </div>

        {paginatedBlogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <>
            <table className="min-w-full rounded overflow-hidden shadow-md bg-white">
              <thead className="bg-green-100 border-b border-green-300">
                <tr>
                  <th className="p-3 text-left text-green-700">Image</th>
                  <th className="p-3 text-left text-green-700">Title</th>
                  <th className="p-3 text-left text-green-700">Date</th>
                  <th className="p-3 text-left text-green-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedBlogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-b border-gray-200 hover:bg-green-50"
                  >
                    <td className="p-3">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-24 h-24 object-cover rounded"
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    <td className="p-3 font-semibold">{blog.title}</td>
                    <td className="p-3">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3 flex gap-2">
                      <Button
                        onClick={() => handleEdit(blog._id)}
                        variant="outline"
                        className="text-green-700"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(blog._id)}
                        variant="destructive"
                        disabled={deleting === blog._id}
                      >
                        {deleting === blog._id ? "Deleting..." : "Delete"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="mt-6 flex justify-center items-center space-x-3">
              <Button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                className="px-3"
              >
                Prev
              </Button>
              {[...Array(totalPages)].map((_, idx) => (
                <Button
                  key={idx}
                  onClick={() => goToPage(idx + 1)}
                  variant={idx + 1 === currentPage ? "default" : "outline"}
                  className="px-3 min-w-[2rem]"
                >
                  {idx + 1}
                </Button>
              ))}
              <Button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                className="px-3"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default BlogsList;
