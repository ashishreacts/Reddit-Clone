import React, { useState } from "react";
import "./Modal.css";
function Modal({ handleCloseModal, handleFormSubmit }) {
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    setImage(null);
    setHeading("");
    setDescription("");

    handleCloseModal();

    const formData = {
      image,
      heading,
      description,
    };

    handleFormSubmit(formData);
  };
  return (
    <div className="modal_box">
      <div className="modal-wrapper" onClick={handleCloseModal}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-h2">Add New Post</h2>
        </div>
        <div className="modal-body">
          <div className="modal_browImg">
            <label
              htmlFor="imageInput"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              Browse Image:&nbsp;
            </label>
            <input
              type="file"
              className="modal_browImg"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="modal_heading_desc">
            <h4 className="modal_h4">Heading:&nbsp;</h4>
            <input
              type="text"
              className="modal_form_control_heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <p className="modal_p">Description:&nbsp;</p>
            <textarea
              className="modal_form_control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="modal_btn btn btn-secondary"
            // data-bs-dismiss="modal"
            onClick={handleCloseModal}
          >
            Close
          </button>
          &nbsp;
          <button
            type="button"
            className="modal_btn btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
