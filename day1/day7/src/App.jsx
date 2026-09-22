// import Menu from "./menu.jsx";
// import "./App.css";
// function Header() {
//   return (
//     <header>
//       <h1>Addis Eats</h1>
//     {/* <p>Order food across Addis.</p> */}
//     </header>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <Menu />
//     </div>
//   );
// }

// export default App;

import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishDetails from "./pages/DishDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path="menu"
          element={<Menu />}
        />

        <Route
          path="menu/:id"
          element={<DishDetails />}
        />
        <Route
          path="cart"
          element={<Cart />}
        />
        <Route
          path="sign-in"
          element={<SignIn />}
        />
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
