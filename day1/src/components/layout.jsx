import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Layout() {
  const { totalItems } = useCart();

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