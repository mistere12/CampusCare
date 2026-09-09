import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function DishCard({ dish }) {
  const { addToCart } = useCart();

  return (
    <article className="dish-card">
      <h3>{dish.name}</h3>

      <p>
        Category: {dish.category}
      </p>

      <p>{dish.description}</p>

      <strong>
        {dish.price} ETB
      </strong>

      <div className="dish-actions">
        <Link to={`/menu/${dish.id}`}>
          View Details
        </Link>

        <button
          onClick={() => addToCart(dish)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default DishCard;