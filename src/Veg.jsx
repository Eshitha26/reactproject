import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function Veg() {
  const veg = useSelector((state) => state.products.Veg);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // Price range options
  const priceRanges = [
    { label: "< $100", min: 0, max: 99.99 },
    { label: "$100- $200", min: 100, max: 200 },
    { label: "> $200", min: 200.01, max: Infinity },
  ];

  // Handle Price Range Checkbox Selection
  const handlePriceChange = (rangeLabel) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeLabel) ? prev.filter((r) => r !== rangeLabel) : [...prev, rangeLabel]
    );
  };

  // Filter items based on search and price range
  const filteredVeg = veg.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((rangeLabel) => {
        const range = priceRanges.find((r) => r.label === rangeLabel);
        return item.price >= range.min && item.price <= range.max;
      });

    return matchesSearch && matchesPrice;
  });

  const totalPages = Math.ceil(filteredVeg.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVegItems = filteredVeg.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Veg Items</h1>

      {/* Search Bar */}
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search for vegetables..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="input-group-text">
          <i className="fas fa-search"></i> {/* Search Icon */}
        </span>
      </div>

      {/* Price Range Filters */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {priceRanges.map((range) => (
          <div key={range.label} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={range.label}
              checked={selectedPriceRanges.includes(range.label)}
              onChange={() => handlePriceChange(range.label)}
            />
            <label className="form-check-label" htmlFor={range.label}>
              {range.label}
            </label>
          </div>
        ))}
      </div>

      {/* Display Veg Items */}
      <div className="row">
        {currentVegItems.length > 0 ? (
          currentVegItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-primary btn-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No vegetables found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, pageIndex) => (
              <li
                key={pageIndex}
                className={`page-item ${currentPage === pageIndex + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Veg;
