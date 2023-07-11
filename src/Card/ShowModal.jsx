import React, { useState } from "react";
import "./ShowModal.css";
const MyModal = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    closeModal(); // Call the closeModal prop from the parent component
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the form data (e.g., send it to the server)
    console.log("Title: " + title);
    console.log("Content: " + content);

    // Close the modal
    handleCloseModal();
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
        <button onClick={handleCloseModal}>Close</button>
      </form>
    </div>
  );
};

export default MyModal;
