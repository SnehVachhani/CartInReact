import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Nav from "./Nav";
import { addProduct } from "./redux/cartRedux";

const mainContainer = {
  padding: "2px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  clear: "right",
};

const Container = {
  flex: "1",
  margin: "5px",
  minWidth: "280px",
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5fbfd",
  position: " relative",
  flexDirection: "column",
};

const imageContainer = {
  display: "flex",
  flexDirection: "vertical",
  width: "auto",
  height: "80%",
};
const text = {
  fontWeight: "500",
};
const btn = {
  padding: "5px",
  border: "2px solid grey",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: "500",
  transition: " all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

function Home() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(addProduct(e));
  };
  const p = useSelector((state) => state.home.products);
  // console.log(useSelector((state) => state.cart.products));
  return (
    <>
      <Nav></Nav>
      <div style={mainContainer}>
        {p.map((product) => {
          return (
            <div key={product.id} style={Container}>
              <img src={product.img} style={imageContainer} alt={product.name} />
              <div style={text}>{product.name}</div>
              <button
                style={btn}
                onClick={() => {
                  handleClick(product);
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
