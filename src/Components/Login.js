// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";

// function Login() {
//     const [user, setUser] = useState([{userName: '', password: ''}]);
    
//     const history = useHistory();

//     const HandleLogin = () => {
//         if(user.userName === 'ferry' && user.password === 'ferrysalhan') {
//             history.push('/product-list');
//         } else {
//             alert('Wrong username or password!');
//         }
//     }

//     return (
//         <div>
//             <h3>Login</h3>
//             <label style={{marginRight: 20}}>Username</label>
//             <input type="text" placeholder="Enter username" onChange={(e) => setUser({...user, userName: e.target.value})}></input>
//             <br></br>
//             <br></br>
//             <label style={{marginRight: 20}}>Password</label>
//             <input type="password" placeholder="Enter password" onChange={(e) => setUser({...user, password: e.target.value})}></input>
//             <br></br>
//             <br></br>
//             <button onClick={HandleLogin} disabled={!user.userName || !user.password}>Login</button>
//         </div>
//     )
// }

// export default Login



import React, { useState, useEffect } from "react";

//import Header from './Header'

const ProductsPage = (props) => {
  useEffect(() => {}, []);

  const [object, setFormData] = useState({});

  const saveData = (event) => {
    //user registration api

    //save data to api
    let body = {};
    body["name"] = object.firstname;

    let headers = {};
    headers["Content-type"] = "application/json; charset=UTF-8";

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        //redirect
        //display on screen
        // save to state

        console.log(response);
        if (event === "submit") {
          props.history.push({
            pathname: "/products",

            data: object,
          });
        } else if (event === "reset") {
          setFormData({ ...object, firstname: "", lastname: "", email: "" });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // if(event == "submit"){
    //     props.history.push({

    //     pathname : "/about" ,

    //     data : object

    // });
    // }else if(event == "reset"){

    //     setFormData({ ...object,  firstname : "" , lastname : "" , email : "" })

    // }

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
  };

  return (
    <div className="loginpage">
      <h1>Login Page</h1>

      <form onSubmit={(e) => e.preventDefault()}>
      <label>FirstName: </label>
        <input
          type="text"
          value={object.firstname}
          onChange={(e) =>
            setFormData({ ...object, firstname: e.target.value })
          }
        /><br />
   
   <label>LastName: </label>
        <input
          type="text"
          value={object.lastname}
          onChange={(e) => setFormData({ ...object, lastname: e.target.value })}
        /><br />
      
      <label>Email: </label>
        <input
          type="text"
          value={object.email}
          onChange={(e) => setFormData({ ...object, email: e.target.value })}
        />
        <br />

        <button onClick={() => saveData("submit")}>Submit</button>

        {/* <button onClick={() => saveData("reset")}>reset</button> */}
      </form>

      {/* <Link
            to={{
                pathname: "/about",
                state: data
            }}
            ></Link> */}
    </div>
  );
};

export default ProductsPage;


//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components