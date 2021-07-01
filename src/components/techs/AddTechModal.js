import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function AddTechModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please Enter the First and Last Name" });
    } else {
      setFirstName("");
      setLastName("");
    }
    console.log("Message Tech and Attention");
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="input-field">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName" className="active">
            First Name
          </label>
        </div>
      </div>
      <div className="row modal-content">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

// const modalStyle = {
//   width: "75%",
//   height: "75%",
//   padding: "2rem",
// };

export default AddTechModal;
