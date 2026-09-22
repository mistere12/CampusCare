
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Checkout() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section>
        <h2>Checkout</h2>

        <p>Your cart is empty.</p>

        <Link to="/menu">
          Go to Menu
        </Link>
      </section>
    );
  }

  function handleOrder() {
    alert("Order placed successfully!");
  }

  return (
    <section>
      <h2>Checkout</h2>

      <h3>Your Order</h3>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity}
        </p>
      ))}

      <h3>Total: {totalPrice} ETB</h3>

      <button onClick={handleOrder}>
        Place Order
      </button>
    </section>
  );
}

export default Checkout;