
import { Link, useParams } from "react-router-dom";
import dishes from "../data/dishes";
import useCartStore from "../store/cartStore";

function DishDetails() {
  const { id } = useParams();

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    return (
      <section>
        <h2>Dish Not Found</h2>

        <Link to="/menu">
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="dish-details">
      <h2>{dish.name}</h2>

      <p>Category: {dish.category}</p>

      <p>Price: {dish.price} ETB</p>

      <p>{dish.description}</p>

     <button onClick={() => addToCart(dish)}>
  Add to Cart
</button>
      <br />
      <br />

      <Link to="/menu">
        ← Back to Menu
      </Link>
    </section>
  );
}

export default DishDetails;