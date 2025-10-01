import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AdminSidebar from "./AdminSidebar";

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // Base64 preview
  const [imageFile, setImageFile] = useState<File | null>(null); // Actual file object
  const [currentImage, setCurrentImage] = useState(""); // Existing saved image
  const [updatedAt, setUpdatedAt] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingBlog, setFetchingBlog] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog details on mount
    setFetchingBlog(true);
    fetch(`https://susnavabackend.onrender.com/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setTitle(data.data.title || "");
          setDescription(data.data.description || "");
          setCurrentImage(data.data.image || "");
          setUpdatedAt(data.data.updatedAt || "");
          setCreatedAt(data.data.createdAt || "");
        } else {
          alert("Blog not found");
          navigate("/admin/blogs");
        }
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        alert("Error loading blog");
        navigate("/admin/blogs");
      })
      .finally(() => {
        setFetchingBlog(false);
      });
  }, [id, navigate]);

  // Handle image upload and convert to base64 for preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    // Store the actual file object
    setImageFile(file);

    // Create base64 preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('description', description.trim());
      
      // If there's a new image file, append it
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const res = await fetch(`https://susnavabackend.onrender.com/api/blogs/${id}`, {
        method: "PUT",
        body: formData, // Don't set Content-Type header, let browser set it
      });
      
      const data = await res.json();
      
      if (data.success) {
        alert("Blog updated successfully!");
        navigate("/admin/blogs");
      } else {
        alert("Failed to update blog: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Error updating blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Clear the new image selection
  const handleClearNewImage = () => {
    setImage("");
    setImageFile(null);
  };

  if (fetchingBlog) {
    return (
      <div className="flex min-h-screen bg-green-50">
        <AdminSidebar />
        <main className="flex-1 p-8 max-w-4xl">
          <p className="text-center text-green-700">Loading blog details...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-green-50">
      <AdminSidebar />

      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-green-900 mb-2">Edit Blog</h1>
          
          {/* Blog timestamps */}
          <div className="text-sm text-green-600 space-y-1">
            {createdAt && (
              <div>
                Created: <span className="font-semibold">
                  {new Date(createdAt).toLocaleString()}
                </span>
              </div>
            )}
            {updatedAt && (
              <div>
                Last updated: <span className="font-semibold">
                  {new Date(updatedAt).toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-green-700 mb-2">
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-green-700 mb-2">
              Blog Description
            </label>
            <textarea
              id="description"
              placeholder="Write blog description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={8}
              required
              className="w-full px-4 py-3 border border-green-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Current Image Section */}
          {currentImage && !image && (
            <div>
              <label className="block text-sm font-semibold text-green-700 mb-2">
                Current Blog Image
              </label>
              <div className="border border-green-200 rounded-md p-4 bg-green-50">
                <img 
                  src={currentImage} 
                  alt="Current blog image" 
                  className="w-full max-w-md h-48 object-cover rounded-md shadow-sm"
                />
              </div>
            </div>
          )}

          {/* Image Upload Section */}
          <div>
            <label htmlFor="imageUpload" className="block text-sm font-semibold text-green-700 mb-2">
              {currentImage ? "Change Blog Image" : "Upload Blog Image"}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-xs text-green-600 mt-1">
              Supported formats: JPG, PNG, GIF. Max size: 5MB
            </p>
          </div>

          {/* New Image Preview */}
          {image && (
            <div>
              <label className="block text-sm font-semibold text-green-700 mb-2">
                New Image Preview
              </label>
              <div className="border border-green-200 rounded-md p-4 bg-green-50">
                <img 
                  src={image} 
                  alt="New image preview" 
                  className="w-full max-w-md h-48 object-cover rounded-md shadow-sm mb-2"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClearNewImage}
                  className="text-red-600 border-red-300 hover:bg-red-50"
                >
                  Remove New Image
                </Button>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-gradient-to-tr from-green-600 to-green-400 text-white font-semibold w-full py-4 text-lg hover:brightness-110 transition-all duration-200"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Updating Blog...
              </>
            ) : (
              "Update Blog"
            )}
          </Button>

          {/* Cancel Button */}
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/blogs")}
            className="w-full py-3 text-green-700 border-green-300 hover:bg-green-50"
            disabled={loading}
          >
            Cancel
          </Button>
        </form>
      </main>
    </div>
  );
};

export default EditBlog;
