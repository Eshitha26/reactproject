import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, increment, decrement, remove } from "./Store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth); // Check if user is logged in
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Used for redirection

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);

  const [couponCode, setCouponCode] = useState("");
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const [showCoupon, setShowCoupon] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const discountAmount = (totalPrice * discountPercentage) / 100;
  const couponDiscountAmount = (totalPrice * couponCodeDiscountPer) / 100;
  const finalAmount = totalPrice - discountAmount - couponDiscountAmount;

  const handleCoupon = () => {
    switch (couponCode.toUpperCase()) {
      case "COUPON10":
        setCouponCodeDiscountPer(10);
        setShowCoupon(true);
        break;
      case "COUPON20":
        setCouponCodeDiscountPer(20);
        setShowCoupon(true);
        break;
      case "COUPON30":
        setCouponCodeDiscountPer(30);
        setShowCoupon(true);
        break;
      case "COUPON40":
        setCouponCodeDiscountPer(40);
        setShowCoupon(true);
        break;
      default:
        alert("INVALID COUPON CODE");
        setCouponCodeDiscountPer(0);
    }
  };

  const handlePurchase = () => {
    if (!isAuthenticated) {
      // Redirect to login if not logged in
      alert("You need to log in first!");
      navigate("/login");
      return;
    }

    const purchaseDate = new Date().toLocaleDateString();
    const purchaseTime = new Date().toLocaleTimeString();

    const purchaseDetails = {
      items: [...cartItems],
      totalPrice: totalPrice,
      date: purchaseDate,
      time: purchaseTime,
    };

    dispatch(addPurchaseDetails(purchaseDetails));
    dispatch(clearCart());

    // Redirect to order page after purchase
    navigate("/order");
  };

  return (
    <div className="container mt-5" style={{paddingLeft:"500px"}}>
      {cartItems.length > 0 ? (
        <>
          <h1>Cart Page</h1>
          <ul className="list-group" >
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="me-3"
                    style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                  />
                  {item.name} - ${item.price.toFixed(2)}
                </div>
                <div>
                  <button className="btn btn-sm btn-success mx-1" onClick={() => dispatch(increment(item))}>
                    +
                  </button>
                  <button className="btn btn-sm btn-warning mx-1" onClick={() => dispatch(decrement(item))}>
                    -
                  </button>
                  Quantity: {item.quantity}
                  <button className="btn btn-sm btn-danger mx-1" onClick={() => dispatch(remove(item))}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-3 d-flex justify-content-center align-items-center mb-4">Your Total Price: ${totalPrice.toFixed(2)}</p>

          {showDiscount && (
            <div className="alert alert-info mb-3 text-center">
              <p>Discount Applied: {discountPercentage}%</p>
              <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
            </div>
          )}

          <p className="mt-3 d-flex justify-content-center align-items-center mb-4">Net Amount to Pay: ${finalAmount.toFixed(2)}</p>

          <div className="mt-3 d-flex justify-content-center align-items-center mb-4">
            <button className="btn btn-primary mx-1" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
              Apply 10% Discount
            </button>
            <button className="btn btn-primary mx-1" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
              Apply 20% Discount
            </button>
            <button className="btn btn-primary mx-1" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
              Apply 30% Discount
            </button>
          </div>

          <div className="mt-3 mt-3 d-flex justify-content-center align-items-center mb-4" >
            <input
              type="text"
              className="form-control w-50 d-inline"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter Coupon Code"
            />
            <button className="btn btn-secondary mx-2" onClick={handleCoupon}>
              Apply Coupon
            </button>
          </div>
          {showCoupon &&(
            <div>
            <p className="mt-3 d-flex justify-content-center align-items-center mb-4">Coupon Applied: {couponCode}</p>
            <p className="mt-3 d-flex justify-content-center align-items-center mb-4">Coupon Discount: ${couponDiscountAmount.toFixed(2)}</p>
          </div>
          )

          }
          
          <div className="text-center">
          <button className="btn btn-success  btn-lg" onClick={handlePurchase}>
            Complete Purchase
          </button>
          </div>
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;

