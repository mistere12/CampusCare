// // // // import { Link } from "react-router-dom";
// // // // import useCartStore from "../store/cartStore";

// // // // function DishCard({ dish }) {
// // // //   const addToCart = useCartStore(
// // // //     (state) => state.addToCart
// // // //   );

// // // //   return (
// // // //     <article className="dish-card">
// // // //       <h3>{dish.name}</h3>

// // // //       <p>
// // // //         Category: {dish.category}
// // // //       </p>

// // // //       <p>{dish.description}</p>

// // // //       <strong>
// // // //         {dish.price} ETB
// // // //       </strong>

// // // //       <div className="dish-actions">
// // // //         <Link to={`/menu/${dish.id}`}>
// // // //           View Details
// // // //         </Link>

// // // //         <button
// // // //           onClick={() => addToCart(dish)}
// // // //         >
// // // //           Add to Cart
// // // //         </button>
// // // //       </div>
// // // //     </article>
// // // //   );
// // // // }

// // // // export default DishCard;
// // // import { Link } from "react-router-dom";
// // // import useCartStore from "../store/cartStore";

// // // function DishCard({ dish }) {
// // //   // Temporary error test
// // //   if (dish.id === 1) {
// // //     throw new Error("Test dish error");
// // //   }

// // //   const addToCart = useCartStore(
// // //     (state) => state.addToCart
// // //   );

// // //   return (
// // //     <article className="dish-card">
// // //       <h3>{dish.name}</h3>

// // //       <p>
// // //         Category: {dish.category}
// // //       </p>

// // //       <p>{dish.description}</p>

// // //       <strong>
// // //         {dish.price} ETB
// // //       </strong>

// // //       <div className="dish-actions">
// // //         <Link to={`/menu/${dish.id}`}>
// // //           View Details
// // //         </Link>

// // //         <button
// // //           onClick={() => addToCart(dish)}
// // //         >
// // //           Add to Cart
// // //         </button>
// // //       </div>
// // //     </article>
// // //   );
// // // }

// // // export default DishCard;
// // import { Link } from "react-router-dom";
// // import useCartStore from "../store/cartStore";

// // function DishCard({ dish }) {
// //   // TEMPORARY ERROR TEST
// //   if (dish.name === "Doro Wat") {
// //     throw new Error("Test dish error");
// //   }

// //   const addToCart = useCartStore(
// //     (state) => state.addToCart
// //   );

// //   return (
// //     <article className="dish-card">
// //       <h3>{dish.name}</h3>

// //       <p>
// //         Category: {dish.category}
// //       </p>

// //       <p>{dish.description}</p>

// //       <strong>
// //         {dish.price} ETB
// //       </strong>

// //       <div className="dish-actions">
// //         <Link to={`/menu/${dish.id}`}>
// //           View Details
// //         </Link>

// //         <button
// //           onClick={() => addToCart(dish)}
// //         >
// //           Add to Cart
// //         </button>
// //       </div>
// //     </article>
// //   );
// // }

// // export default DishCard;
// import { Link } from "react-router-dom";
// import useCartStore from "../store/cartStore";

// function DishCard({ dish }) {
//   const addToCart = useCartStore(
//     (state) => state.addToCart
//   );

//   return (
//     <article className="dish-card">
//       <h3>{dish.name}</h3>

//       <p>
//         Category: {dish.category}
//       </p>

//       <p>{dish.description}</p>

//       <strong>
//         {dish.price} ETB
//       </strong>

//       <div className="dish-actions">
//         <Link to={`/menu/${dish.id}`}>
//           View Details
//         </Link>

//         <button
//           onClick={() => addToCart(dish)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </article>
//   );
// }

// export default DishCard;
import { Link } from "react-router-dom";
import { Profiler } from "react";
import useCartStore from "../store/cartStore";

function profileDishCard(
  id,
  phase,
  actualDuration
) {
  console.log(
    "Profiler:",
    id,
    phase,
    "Time:",
    actualDuration
  );
}

function DishCard({ dish }) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  return (
    <Profiler
      id={dish.name}
      onRender={profileDishCard}
    >
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
    </Profiler>
  );
}

export default DishCard;