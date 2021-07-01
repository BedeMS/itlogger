import React from "react";

function SearchBar() {
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">Search</i>
            </label>
            <i className="material-icons">Close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
