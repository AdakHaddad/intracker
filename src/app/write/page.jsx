"use client"; // WritePage.js
import "react-quill/dist/quill.bubble.css";

import { useState } from "react";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("style");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    // Perform any necessary form validation here
    if (!title || !content || !category || !image) {
      console.error("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Post created successfully:", data);
        // Redirect or do something else after successful creation
      } else {
        console.error("Failed to create post:", res.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleSubmit}>Publish</button>
    </div>
  );
};

export default WritePost;
