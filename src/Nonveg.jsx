import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
  const nonveg = useSelector((state) => state.products.NonVeg);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(nonveg.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNonVegItems = nonveg.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const finalNonVegItems = currentNonVegItems.map((item,index) => (
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
            <p className="card-text">${item.price}</p>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="btn btn-primary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ));
  

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Non-Veg Items</h1>
      <ol className="row">{finalNonVegItems}</ol>

      {/* Pagination Controls */}
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
              className={`page-item ${
                currentPage === pageIndex + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageIndex + 1)}
              >
                {pageIndex + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nonveg;


