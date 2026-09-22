
// import { Link, useParams } from "react-router-dom";
// import dishes from "../data/dishes";
// import useCartStore from "../store/cartStore";

// function DishDetails() {
//   const { id } = useParams();

//   const addToCart = useCartStore(
//     (state) => state.addToCart
//   );

//   const dish = dishes.find((dish) => dish.id === id);

//   if (!dish) {
//     return (
//       <section>
//         <h2>Dish Not Found</h2>

//         <Link to="/menu">
//           Back to Menu
//         </Link>
//       </section>
//     );
//   }

//   return (
//     <section className="dish-details">
//       <h2>{dish.name}</h2>

//       <p>Category: {dish.category}</p>

//       <p>Price: {dish.price} ETB</p>

//       <p>{dish.description}</p>

//      <button onClick={() => addToCart(dish)}>
//   Add to Cart
// </button>
//       <br />
//       <br />

//       <Link to="/menu">
//         ← Back to Menu
//       </Link>
//     </section>
//   );
// }

// export default DishDetails;
import {
  useRef,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import dishes from "../data/dishes";
import useCartStore from "../store/cartStore";
import Modal from "../ui/Modal";

function DishDetails() {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const detailsButtonRef =
    useRef(null);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const dish = dishes.find(
    (dish) => dish.id === id
  );

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);

    setTimeout(() => {
      detailsButtonRef.current?.focus();
    }, 0);
  }

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

      <p>
        Category: {dish.category}
      </p>

      <p>
        Price: {dish.price} ETB
      </p>

      <p>{dish.description}</p>

      <button
        onClick={() => addToCart(dish)}
      >
        Add to Cart
      </button>

      <br />
      <br />

      <button
        ref={detailsButtonRef}
        onClick={openModal}
      >
        View Dish Details
      </button>

      <br />
      <br />

      <Link to="/menu">
        ← Back to Menu
      </Link>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>{dish.name}</h2>

          <p>
            Category: {dish.category}
          </p>

          <p>
            Price: {dish.price} ETB
          </p>

          <p>{dish.description}</p>
        </Modal>
      )}
    </section>
  );
}

export default DishDetails;