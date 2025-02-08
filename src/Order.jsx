/*import { useSelector } from "react-redux";

function Order() {
  const orders = useSelector((state) => state.purchasedetails);

  const orderItems = orders.map((purchase, index) => (
    <div key={index} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Order Date: {purchase.date}</h5>
        <ul className="list-group">
          {purchase.items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-group-item d-flex justify-content-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 fw-bold">Total Amount: ${purchase.totalPrice.toFixed(2)}</p>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p className="alert alert-warning">No purchase history available</p>
      ) : (
        <div>{orderItems}</div>
      )}
    </div>
  );
}

export default Order;*/
import { useSelector } from "react-redux";

function Order() {
  const orders = useSelector((state) => state.purchasedetails);

  const orderItems = orders.map((purchase, index) => (
    <div key={index} className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">Order Invoice</h5>
        <p className="text-muted text-center">
          <strong>Order Date:</strong> {purchase.date}  
          <br />
          <strong>Order Time:</strong> {purchase.time}
        </p>
        <hr />
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between bg-light">
            <strong>Item</strong>
            <strong>Price</strong>
            <strong>Quantity</strong>
            <strong>Subtotal</strong>
          </li>
          {purchase.items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-group-item d-flex justify-content-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between mt-3">
          <h6 className="fw-bold">Total Amount:</h6>
          <h6 className="fw-bold text-success">${purchase.totalPrice.toFixed(2)}</h6>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Order History</h2>
      {orders.length === 0 ? (
        <p className="alert alert-warning text-center">No purchase history available</p>
      ) : (
        <div>{orderItems}</div>
      )}
    </div>
  );
}

export default Order;
