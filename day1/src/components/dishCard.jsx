import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function DishCard({ dish }) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

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