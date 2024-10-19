import React, { useState } from "react";

export const SidePanel = ({ handleAuthorSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const authors = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Sarah Brown"]; // List of authors
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      handleAuthorSearch(searchTerm.trim());
    }
  };

  return (
    <div className="side-panel" style={{ width: "250px", padding: "10px", backgroundColor: "#f4f4f4", borderRight: "1px solid #ddd" }}>
      <h5>Search by Author</h5>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter author name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
      <h5>Popular Authors</h5>
      <ul className="list-group">
        {authors
          .filter(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((author, index) => (
            <li
              key={index}
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => handleAuthorSearch(author)}
            >
              {author}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
