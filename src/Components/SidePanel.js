import React, { useState, useEffect } from "react";

export const SidePanel = ({ handleSearchNewsChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [authors, setAuthors] = useState([]); // State to store authors
  const [loadingAuthors, setLoadingAuthors] = useState(true); // Loading state for authors

  // Function to fetch articles and extract authors
  const fetchAuthors = async () => {
    setLoadingAuthors(true);
    const apiUrl = `https://newsapi.org/v2/everything?q=latest&apiKey=6a8c53491d80475ca792b5cf5217f256`;
    try {
      const response = await fetch(apiUrl);
      const { articles } = await response.json();
      
      // Extract unique authors
      const uniqueAuthors = [...new Set(articles.map(article => article.author).filter(author => author))];
      const shuffledAuthors = shuffleArray(uniqueAuthors).slice(0, 5);
      setAuthors(shuffledAuthors);
    } catch (error) {
      console.error("Failed to fetch authors:", error);
    } finally {
      setLoadingAuthors(false);
    }
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  useEffect(() => {
    fetchAuthors(); // Fetch authors on component mount
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      handleSearchNewsChange(searchTerm.trim());
    }
  };

  return (
    <div className="side-panel" style={{ width: "250px", padding: "10px", backgroundColor: "#f4f4f4", borderRight: "1px solid #ddd" }}>
      <h5>Search News</h5>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter keywords"
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
      {loadingAuthors ? (
        <p>Loading authors...</p>
      ) : (
        <ul className="list-group">
          {authors
            .filter(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((author, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleSearchNewsChange(author)}
              >
                {author}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SidePanel;
