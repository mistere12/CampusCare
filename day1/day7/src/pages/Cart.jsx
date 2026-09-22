// 
import { Link } from "react-router-dom";
import { Profiler, memo } from "react";
import useCartStore from "../store/cartStore";

const CartItem = memo(function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
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

        <span>{item.quantity}</span>

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
  );
});

function profileCart(
  id,
  phase,
  actualDuration
) {
  console.log(
    "Cart Profiler:",
    id,
    phase,
    "Time:",
    actualDuration
  );
}

function Cart() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section>
        <h2>Your Cart</h2>

        <p>Your cart is empty.</p>

        <Link to="/menu">
          Go to Menu
        </Link>
      </section>
    );
  }

  return (
    <Profiler
      id="Cart"
      onRender={profileCart}
    >
      <section>
        <h2>Your Cart</h2>

        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
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
    </Profiler>
  );
}

export default Cart;