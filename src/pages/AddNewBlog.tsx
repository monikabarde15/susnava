import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AdminSidebar from "./AdminSidebar";

const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null); // store actual file
  const [imagePreview, setImagePreview] = useState<string | null>(null); // for preview
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle image file input
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Max size 5MB");
      return;
    }
    setImageFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch("https://susnavabackend.onrender.com/api/blogs", {
        method: "POST",
        body: formData, // send as multipart/form-data
      });
      const data = await res.json();
      if (data.success) {
        alert("Blog added successfully!");
        // Reset form
        setTitle("");
        setDescription("");
        setImageFile(null);
        setImagePreview(null);
        // Redirect to blogs list
        navigate("/admin/blogs");
      } else {
        alert("Failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Error submitting:", err);
      alert("Error submitting blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      <AdminSidebar />
      <main className="flex-1 p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-green-900">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-semibold text-green-700">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-semibold text-green-700">Description</label>
            <textarea
              id="description"
              placeholder="Write blog description"
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-3 border border-green-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Image Upload */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-green-700">
              {imagePreview ? "Change Image" : "Upload Image"}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
            {/* Preview image */}
            {imagePreview && (
              <div className="mt-3">
                <p className="mb-2 text-sm text-green-600">Preview:</p>
                <img src={imagePreview} alt="Preview" className="w-48 h-32 object-cover rounded-md shadow-sm" />
              </div>
            )}
          </div>
          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-tr from-green-600 to-green-400 text-white font-semibold py-4 rounded-md hover:brightness-110 transition"
          >
            {loading ? "Adding..." : "Add Blog"}
          </Button>
        </form>
      </main>
    </div>
  );
};

export default AddNewBlog;