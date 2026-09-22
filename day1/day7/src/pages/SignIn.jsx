import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const from =
    location.state?.from?.pathname ||
    "/checkout";

  function handleSignIn() {
    login();

    navigate(from, {
      replace: true,
    });
  }

  return (
    <section>
      <h2>Sign In</h2>

      <p>
        Please sign in before checkout.
      </p>

      <button onClick={handleSignIn}>
        Sign In
      </button>
    </section>
  );
}

export default SignIn;