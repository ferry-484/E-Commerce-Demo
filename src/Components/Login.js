import React, { useState, useEffect } from "react";

//import Header from './Header'

const ProductsPage = (props) => {
  useEffect(() => {}, []);

  const [object, setFormData] = useState({});

  const saveData = (event) => {
    if(event === "submit")
    props.history.push({
      pathname: "/products",
    });
  };
  // let body = {};
  // body["name"] = object.firstname;

  // let headers = {};
  // headers["Content-type"] = "application/json; charset=UTF-8";

  // fetch("https://fakestoreapi.com/products", {
  //   method: "POST",
  //   body: JSON.stringify(body),
  //   headers: headers,
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     //redirect to child component
  //     //display on screen
  //     // save to state

  //console.log(response);
  // if (event === "submit") {

  //     data: object,
  //   });
  //}
  // } else if (event === "reset") {
  //   setFormData({ ...object, firstname: "", lastname: "", email: "" });
  // }
  //   else {
  //     console.log("Somthing Wrong");
  //   }
  // };
  // .catch((error) => {
  //   console.log(error);
  // });

  return (
    <div className="loginpage">
      <h1>Login Page</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* <label>FirstName: </label>
        <input
          type="text"
          value={object.firstname}
          onChange={(e) =>
            setFormData({ ...object, firstname: e.target.value })
          }
          required
        /> */}
        {/* <br /> */}

        <label>Email: </label>
        <input
          type="email"
          value={object.email}
          onChange={(e) => setFormData({ ...object, email: e.target.value })}
          required
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={object.password}
          onChange={(e) => setFormData({ ...object, password: e.target.value })}
          required
        />
        <br />

        <button onClick={() => saveData("submit")}>Submit</button>
      </form>
    </div>
  );
};

export default ProductsPage;

//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components

// if(event == "submit"){
//     props.history.push({

//     pathname : "/about" ,

//     data : object

// });
// }else if(event == "reset"){

//     setFormData({ ...object,  firstname : "" , lastname : "" , email : "" })

// }
/* <Link
  {/* <button onClick={() => saveData("reset")}>reset</button> */
// to={{
//     pathname: "/about",
//     state: data
// }}
// ></Link> */
// let body = {};
// let header = {};
// header['Content-type'] = "application/json; charset=UTF-8";
// fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: header
//         })
//         .then(response => response.json())
//         .then(data => {
//         console.log(data);
//         }).catch(err=> console.log(err));

//send data to new page
