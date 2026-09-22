// import {
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// function RequireAuth({ children }) {
//   const location = useLocation();

//   const isLoggedIn =
//     localStorage.getItem(
//       "isLoggedIn"
//     ) === "true";

//   if (!isLoggedIn) {
//     return (
//       <Navigate
//         to="/sign-in"
//         state={{ from: location }}
//         replace
//       />
//     );
//   }

//   return children;
// }

// export default RequireAuth;
import {
  Navigate,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function RequireAuth({ children }) {
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/sign-in"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default RequireAuth;