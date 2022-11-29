import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Dialog = ({
  open,
  onCloseModal,
  handleChange,
  handleSubmit,
  dialogItem,
}) => {
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <p>
          <input
            type="text"
            name="name"
            value={dialogItem.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="name">Age</label>
        <p>
          <input
            type="number"
            name="age"
            value={dialogItem.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </p>
      </div>

      <button
        className="submit-button"
        type="submit"
        onClick={(e) => handleSubmit(e, dialogItem)}
      >
        Submit
      </button>
    </Modal>
  );
};

export default Dialog;
