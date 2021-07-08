import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs } from "../../actions/logActions";

function SearchBar({ searchLogs }) {
  // a useRef is very similar to state except that it does not cause our
  // componenet to rerender. So if we needed to update our component but
  // didnot want to cause a rerender, we can useRef;
  // It returns to us an object with a current property.
  // A good use case for refs is to store the previous value of our state.
  const text = useRef("");
  // const [search, setSearch] = useState("");

  const onChange = (e) => {
    searchLogs(text.current.value);
    // console.log(text.current.value)
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              name="search"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  // logs: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     logs: state.log.logs,
//   };
// };

export default connect(null, { searchLogs })(SearchBar);
