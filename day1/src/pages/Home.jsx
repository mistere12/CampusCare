import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h2>Welcome to Habesha Eats</h2>

      <p>
        Discover delicious Ethiopian food
        and order your favorite dishes.
      </p>

      <Link className="button" to="/menu">
        View Menu
      </Link>
    </section>
  );
}

export default Home;