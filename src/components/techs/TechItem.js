import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";

function TechItem({ tech, deleteTech }) {
  function handleClick() {
    deleteTech(tech.id);
  }
  return (
    <li className="collection-item">
      <div>
        {tech.firstName}
        {tech.lastName}
        <a href="#!" className="secondary-content" onClick={handleClick}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
