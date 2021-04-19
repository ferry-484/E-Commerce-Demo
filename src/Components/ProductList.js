import React, { useEffect, useState } from "react";
import "../App.css";

function ProductList(props) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    showProducts();
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  //fetch the products and store them into the localstore
  const showProducts = async () => {
    let productList = await fetch("https://fakestoreapi.com/products");
    productList = await productList.json();
    setProducts(productList);
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  };

  const addToCart = (product) => {
    cartItems.push(product);
    // add the products into cart
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const viewCart = () => {
    props.history.push({
      pathname: "/view",
    });
  };

  return (
    //display the products on screen
    <div className="productslist">
      <div style={{ display: "flex", padding: "20px" }}>
        <h2 style={{ width: "100%" }}>
          <span style={{ float: "left", marginLeft: "10px" }}>
            Products Page
          </span>
          <input
            type="text"
            className="search"
            placeholder="Search Something!!"
            onChange={(event) => setSearchItem(event.target.value)}
            value={searchItem}
          ></input>
          <div>
            <span>
              <button className="viewCart" onClick={viewCart}>
                View Cart({cartItems.length})
              </button>
              {cartItems.length}
            </span>
          </div>
        </h2>
      </div>
      {products.length > 0 ? (
        products
          .filter((product) => {
            if (!searchItem) {
              return true;
            } else
              return product.title
                .toLowerCase()
                .includes(searchItem.toLowerCase());
          })
          .map((product) => {
            return (
              <div className="card">
                <img
                  src={product.image}
                  style={{ width: 100 }}
                  alt={product.id}
                ></img>
                <div style={{ display: "flex" }}>
                  <span
                    style={{ float: "left", overflow: "hidden" }}
                    title={product.title}
                  >
                    {product.title}
                  </span>
                  <span className="price">${product.price}</span>
                </div>
                <div>
                  <button onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
                <br />
                <button>Shop Now</button>
              </div>
            );
          })
      ) : (
        <h2>No Product Add!!</h2>
      )}
    </div>
  );
}

export default ProductList;
