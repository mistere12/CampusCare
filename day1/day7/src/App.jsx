// 
import {
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import Layout from "./components/Layout";
import ErrorBoundary from "./ErrorBoundary";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishDetails from "./pages/DishDetails";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

import RequireAuth from "./components/RequireAuth";

// Lazy-loaded pages
const Checkout = lazy(
  () => import("./pages/Checkout")
);

const Receipt = lazy(
  () => import("./pages/Receipt")
);

function Loading() {
  return (
    <p>Loading...</p>
  );
}

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
          element={
            <ErrorBoundary
              fallback={<p>Menu failed to load.</p>}
            >
              <Menu />
            </ErrorBoundary>
          }
        />

        <Route
          path="menu/:id"
          element={<DishDetails />}
        />

        <Route
          path="cart"
          element={
            <ErrorBoundary
              fallback={<p>Cart failed to load.</p>}
            >
              <Cart />
            </ErrorBoundary>
          }
        />

        <Route
          path="sign-in"
          element={<SignIn />}
        />

        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Suspense fallback={<Loading />}>
                <Checkout />
              </Suspense>
            </RequireAuth>
          }
        />

        <Route
          path="receipt"
          element={
            <Suspense fallback={<Loading />}>
              <Receipt />
            </Suspense>
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