import { saveProduct } from "../../lib/saveProduct";
"use client";

import { useState } from "react";
import { uploadImage } from "../../components/upload";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !price) {
      alert("Fill all fields");
      return;
    }

    setUploading(true);

    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
    }

    const product = {
      name,
      price,
      category,
      image: imageUrl,
      createdAt: Date.now(),
    };

    await saveProduct(product);

    alert("Product created (check console)");
    setUploading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>

      <input placeholder="Product Name" onChange={(e) => setName(e.target.value)} /><br /><br />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br /><br />
      <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} /><br /><br />

      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} /><br /><br />

      <button onClick={handleSubmit}>
        {uploading ? "Uploading..." : "Add Product"}
      </button>
    </div>
  );
}
