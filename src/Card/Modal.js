import React, { useState } from "react";

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

    const modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalBackdrop) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
    document.body.classList.remove("modal-open");

    const formData = {
      image,
      heading,
      description,
    };

    handleFormSubmit(formData);
  };
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add New Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal_browImg">
                <label htmlFor="imageInput">Browse Image:&nbsp;</label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="modal_heading_desc">
                <h4 className="modal_h4">Heading:&nbsp;</h4>
                <input
                  type="text"
                  className="modal_form_control"
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
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
