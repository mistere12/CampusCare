// import { useSearchParams } from "react-router-dom";
// import dishes from "../data/dishes";
// import DishCard from "../components/DishCard";

// function Menu() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [orderTotal, setOrderTotal] = useState(0);

//   const filteredDishes =
//     selectedCategory === "All"
//       ? dishes
//       : dishes.filter(
//           (dish) => dish.category === selectedCategory
//         );

//   return (
//     <main>
//       <h2>Menu</h2>

//       <div>
//         <button onClick={() => setSelectedCategory("All")}>
//           All
//         </button>

//         <button
//           onClick={() => setSelectedCategory("Ethiopian")}
//         >
//           Ethiopian
//         </button>

//         <button
//           onClick={() => setSelectedCategory("Italian")}
//         >
//           Italian
//         </button>
//       </div>

//       <div>
//         {filteredDishes.map((dish) => (
//           <div key={dish.id}>
//             <h3>{dish.name}</h3>
//             <p>{dish.category}</p>
//             <p>{dish.price} ETB</p>

//             {dish.spicy && <span>Spicy</span>}

//             <br />

//             <button
//               onClick={() =>
//                 setOrderTotal((total) => total + dish.price)
//               }
//             >
//               Add
//             </button>
//           </div>
//         ))}
//       </div>

//       <h2>Total: {orderTotal} ETB</h2>
//     </main>
//   );
// }

// export default Menu;
import {
  useState,
  Profiler,
} from "react";

import dishes from "../data/dishes";

function profileMenu(
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

function Menu() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [orderTotal, setOrderTotal] =
    useState(0);

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) =>
            dish.category === selectedCategory
        );

  return (
    <main>
      <h2>Menu</h2>

      <div>
        <button
          onClick={() =>
            setSelectedCategory("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setSelectedCategory("Ethiopian")
          }
        >
          Ethiopian
        </button>

        <button
          onClick={() =>
            setSelectedCategory("Italian")
          }
        >
          Italian
        </button>
      </div>

      <Profiler
        id="DishList"
        onRender={profileMenu}
      >
        <div>
          {filteredDishes.map((dish) => (
            <div key={dish.id}>
              <h3>{dish.name}</h3>

              <p>{dish.category}</p>

              <p>{dish.price} ETB</p>

              {dish.spicy && (
                <span>Spicy</span>
              )}

              <br />

              <button
                onClick={() =>
                  setOrderTotal(
                    (total) =>
                      total + dish.price
                  )
                }
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </Profiler>

      <h2>
        Total: {orderTotal} ETB
      </h2>
    </main>
  );
}

export default Menu;