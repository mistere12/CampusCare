import { Link, Outlet } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Layout() {
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <header className="header">
        <h1>Habesha Eats</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>

          <Link to="/cart">
            Cart ({totalItems})
          </Link>

          <Link to="/checkout">
            Checkout
          </Link>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Habesha Eats</p>
      </footer>
    </div>
  );
}

export default Layout;