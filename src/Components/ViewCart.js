import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import "../App.css";

function ViewCart(props, item) {
  const [view, setView] = useState([]);
  //const [num, setNum] = useState(1);
  //let [list, setList] = useState([]);
  useEffect(() => {
    viewProducts();
  }, [view]);
  //const isEmpty = true;

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

  const incValue = (item, index) => {
    let product = JSON.parse(localStorage.getItem("cartItems"));
    item["quantity"] = item.quantity + 1;
    item["price"] = item.quantity * item.price;
    product.splice(index, 1, item);
    localStorage.setItem("cartItems", JSON.stringify(product));
    console.log(product);
  };

  const decValue = (item, index) => {
    let product = JSON.parse(localStorage.getItem("cartItems"));
    item["quantity"] = item.quantity - 1;
    //item["price"] = item.quantity * item.price;
    product.splice(index, 1, item);
    localStorage.setItem("cartItems", JSON.stringify(product));
    console.log(product);
  };
  //   const removeItem = (id) => {
  //     let cartData = JSON.parse(localStorage.getItem("cartItems"));
  //     cartData.splice(id, 1);
  //     localStorage.setItem("cartItems", JSON.stringify(cartData));
  //   };

  // const decValue = () => {
  //   setNum(num - 1);
  // };

  // const incValue = () => {
  //   setNum(num + 1);
  // };
  // const EmptyCard = () => {
  //   <h1>No items in sHopping Cart, Starts Adding!!</h1>;
  // };

  // const handleAdd = async (productid, quantity) => {
  //   const { response } = await fetch("https://fakestoreapi.com/products");
  //   setView(response);
  // };

  // const handleUpdate = async (productid, price) => {
  //   const { res } = await fetch("https://fakestoreapi.com/products");
  //   setView(res);
  // };

  return (
    <div>
      <h1>View Cart Page</h1>
      <button onClick={redirect}>Back To HomePage</button>
      {/* {isEmpty ? <EmptyCard /> : <FilledCard />} */}
      {view.length > 0 ? (
        view.map((value, index) => {
          return (
            <div className="card" key={index}>
              <img src={value.image} alt="products" style={{ width: 100 }} />
              <h2>{value.title}</h2>
              <p className="price">${value.price}</p>
              <p>{value.description}</p>
              <button
                disabled={value.quantity === 1}
                onClick={() => decValue(value, index)}
              >
                -
              </button>
              <h2>{value.quantity}</h2>
              <button onClick={() => incValue(value, index)}>+</button>
              <p>
                <button onClick={() => remove(index)}>Remove Item</button>
                <button>CheckOut</button>
                <h2>
                  {/* Quantity: {value.quantity} */}
                  <br />
                  <br />
                  {/* Total Amount: = ${value.quantity * value.price} */}
                </h2>
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
