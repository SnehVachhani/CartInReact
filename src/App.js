import Home from "./Home";
import Bill from "./Bill";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bill" element={<Bill />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
