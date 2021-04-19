import React, { useState, useEffect } from "react";
import "../App.css";

function ViewCart(props) {
  const [view, setView] = useState([]);
  //let [list, setList] = useState([]);
  useEffect(() => {
    viewProducts();
  }, [view]);

  const viewProducts = () => {
    let getData = JSON.parse(localStorage.getItem("cartItems"));
    console.log(getData);
    setView(getData);
  };

  const redirect = () => {
    props.history.push({
      pathname: "/products",
    });
  };

  const remove = (id) => {
    let removeData = JSON.parse(localStorage.getItem("cartItems"));
    removeData.splice(id, 1);
    localStorage.setItem("cartItems", JSON.stringify(removeData));
  };

  //   const removeItem = (id) => {
  //     let cartData = JSON.parse(localStorage.getItem("cartItems"));
  //     cartData.splice(id, 1);
  //     localStorage.setItem("cartItems", JSON.stringify(cartData));
  //   };

  return (
    <div>
      <h1>View Cart Page</h1>
      <button onClick={redirect}>Back To HomePage</button>
      {view.length > 0 ? (
        view.map((value, index) => {
          return (
            <div className="card">
              <img src={value.image} alt="products" style={{ width: 100 }} />
              <h2>{value.title}</h2>
              <p className="price">{value.price}</p>
              <p>{value.description}</p>
              <p>
                <button onClick={() => remove(index)}>Remove Item</button>
              </p>
            </div>
          );
        })
      ) : (
        <h2>No Products Found!!</h2>
      )}
    </div>
  );
}

export default ViewCart;

/* <>
<div
  style={{
    padding: "30px",
    margin: "10px",
    width: "250px",
    height: "250px",
  }}
>
  <div style={{ width: 1000 }}>
    <img
      src={value.image}
      style={{ width: 100 }}
      alt="productImage"
    />
    <div>
      <h5>{value.title}</h5>
      <p style={{ width: 150, margin: "auto" }}>
        {value.description}
      </p>
      <b>${value.price}</b>
    </div>
    <div>
      <button>Remove Item</button>
    </div>
  </div>
</div>
</> */
