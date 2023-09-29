// Import the CSS file
import '../css/SearchBar.css';
import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSort, setSelectedSort] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');

  const handleSearch = async () => {
    try {
      // Simulate loading state while fetching data
      setLoading(true);

      // Simulate an API request with setTimeout (replace with actual API call)
      setTimeout(async () => {
        // Clear any previous warnings
        setWarning('');

        // Validate selectedSort
        if (selectedSort && !['Relevance', 'Price Low to High', 'Price High to Low'].includes(selectedSort)) {
          setWarning('Invalid sort option selected.');
          setLoading(false);
          return;
        }

        // Simulated data for demonstration
        const simulatedResults = [
          { id: 1, name: 'Product 1', category: 'Electronics', price: 199.99 },
          { id: 2, name: 'Product 2', category: 'Clothing', price: 49.99 },
          { id: 3, name: 'Product 3', category: 'Home & Kitchen', price: 29.99 },
        ];

        // Filter results based on conditions
        let filteredResults = simulatedResults;

        if (searchQuery) {
          filteredResults = simulatedResults.filter(result =>
            result.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        if (selectedCategory !== 'All Categories') {
          filteredResults = filteredResults.filter(result =>
            result.category === selectedCategory
          );
        }

        if (selectedSort === 'Price Low to High') {
          filteredResults = filteredResults.sort((a, b) => a.price - b.price);
        } else if (selectedSort === 'Price High to Low') {
          filteredResults = filteredResults.sort((a, b) => b.price - a.price);
        }

        setSearchResults(filteredResults);

        // Turn off loading state
        setLoading(false);
      }, 1000); // Simulate a 1-second delay

    } catch (error) {
      console.error('Error fetching data:', error);

      // Turn off loading state in case of an error
      setLoading(false);
    }
  };

  useEffect(() => {
    // You can also add logic here to handle initial data loading if needed.
  }, []);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All Categories">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          {/* Add more categories as needed */}
        </select>
        <select
          className="sort-select"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="">Select Sort</option>
          <option value="Relevance">Relevance</option>
          <option value="Price Low to High">Price Low to High</option>
          <option value="Price High to Low">Price High to Low</option>
          <option value="Newest Arrivals">Newest Arrivals</option>
        </select>
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Display warning if any */}
      {warning && <div className="warning">{warning}</div>}

      {/* Display search results */}
      <div className="search-results">
        {searchResults.length > 0 && (
          <>
            <h2>Search Results</h2>
            <div className="card-container">
              {searchResults.map((result) => (
                <div key={result.id} className="search-result">
                  <h3>{result.name}</h3>
                  <p>Category: {result.category}</p>
                  <p>Price: ${result.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {searchResults.length === 0 && (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
