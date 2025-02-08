/*port { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  const dispatch = useDispatch();
  const Milk = useSelector((state) => state.products.Milk);

  const finalMilkItems = Milk.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.name}</strong> - ${item.price}
      </div>
      <button className="btn btn-primary btn-sm" onClick={() => dispatch(addToCart(item))}>
        Add to Cart
      </button>
    </li>
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Milk Items</h1>
      <ol className="list-group">{finalMilkItems}</ol>
    </div>
  );
}

export default Milk;*/
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  const milks = useSelector((state) => state.products.Milk);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(milks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMilkItems = milks.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const finalVegItems = currentMilkItems.map((item, index) => (
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
      <h1 className="text-center mb-4">Veg Items</h1>
      <div className="row">{finalVegItems}</div>

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

export default Milk;