import Menu from "./menu.jsx";
import "./App.css";
function Header() {
  return (
    <header>
      <h1>Addis Eats</h1>
      <p>Order food across Addis.</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

export default App;


