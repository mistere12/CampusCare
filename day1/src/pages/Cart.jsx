import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Your Cart</h2>

        <p>
          Your cart is empty.
        </p>

        <Link to="/menu">
          Go to Menu
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >
          <h3>{item.name}</h3>

          <p>
            {item.price} ETB each
          </p>

          <div>
            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              -
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>
          </div>

          <p>
            Subtotal:{" "}
            {item.price * item.quantity} ETB
          </p>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>
        Total: {totalPrice} ETB
      </h2>

      <Link
        className="button"
        to="/checkout"
      >
        Go to Checkout
      </Link>
    </section>
  );
}

export default Cart;