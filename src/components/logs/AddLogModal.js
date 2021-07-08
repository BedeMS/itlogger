import React, { useState } from "react";
import TechSelectOptions from "../techs/TechSelectOptions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

function AddLogModal({ addLog }) {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please Enter a message and/or tech" });
    } else {
      const log = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLog(log);

      setMessage("");
      setTech("");
      setAttention(false);
    }
    // console.log("Message Tech and Attention");
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="input-field">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="active">
            Log Message
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <select
            name="tech"
            value={tech}
            className="browser-default"
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="" disabled>
              Select Tech
            </option>
            <TechSelectOptions />
            {/* <option value="John Doe">John Doe</option>
            <option value="Sam Smith">Sam Smith</option>
            <option value="Sara Wilson">Sara Wilson</option> */}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
  padding: "2rem",
};

AddLogModal.propTypes = {
  // log: PropTypes.object.isRequired,
  addLog: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     log: state.log,
//   };
// };

// null b/c we're not bringing in any states.
export default connect(null, { addLog })(AddLogModal);
