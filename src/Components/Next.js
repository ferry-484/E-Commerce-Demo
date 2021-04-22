import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Next(props) {
  const [user, setUser] = useState([
    { education: "", profession: "", city: "" },
  ]);
  const history = useHistory();

  const handleAdd = () => {   
    let pathName = "./list";
    history.push(pathName);

    let items = [];
    let itemsData = JSON.parse(localStorage.getItem("data"));

    let obj = {};
    obj["education"] = user.education;
    obj["profession"] = user.profession;
    obj["city"] = user.city;
    items.push(...itemsData, obj);

    if(itemsData.length === 1) {
      let newData = [];
    newData.push(Object.assign({}, ...items));
    localStorage.setItem("data", JSON.stringify(newData));
    }else {
    itemsData.push(Object.assign({}, ...items));
    itemsData.splice(itemsData.length - 2, 1);
    localStorage.setItem("data", JSON.stringify(itemsData));
    }
  alert("Data SuccessFully Added..", props.history.push("./list"));
    
  };

  const handleData = () => {
    let pathData = "/";
    history.push(pathData);
  };

  return (
    <div>
      <form>
        <h1>Next Page</h1>
        <lable>Education:</lable>
        <input
          type="text"
          placeholder="Enter Education"
          value={user.education}
          onChange={(e) => setUser({ ...user, education: e.target.value })}
        ></input>
        <br />
        <lable>Profession:</lable>
        <input
          type="text"
          placeholder="Enter Profession"
          value={user.profession}
          onChange={(e) => setUser({ ...user, profession: e.target.value })}
        ></input>
        <br />
        <label>City: </label>
        <input
          type="text"
          value={user.city}
          placeholder="Enter City"
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        
        <br />
        <br />
        <button type="submit" onClick={handleAdd}>
          Submit
        </button>
        <br />
        <button onClick={handleData} type="submit">
          Home
        </button>
      </form>

    </div>
  );
}

export default Next;



//submit function
  // const handleSubmit = () => {
  //   let users = []; //created new array
  //   let usersData = JSON.parse(localStorage.getItem("user")); //userData is a variable to get the data from LS
  //   let obj = {}; //created a new object
  //   obj["education"] = user.education;
  //   obj["profession"] = user.profession;
  //   obj["city"] = user.city;
  //   users.push(...usersData, obj); //push the new object with the previous object

  //   if (usersData.length === 1) {
  //     let newUser = []; //new  array created for saving the concatination of two objects
  //     newUser.push(Object.assign({}, ...users)); //concat the users array and push it to the newUser array
  //     localStorage.setItem("user", JSON.stringify(newUser));
  //   } else {
  //     usersData.push(Object.assign({}, ...users));
  //     usersData.splice(usersData.length - 2, 1);
  //     localStorage.setItem("user", JSON.stringify(usersData));
  //   }
  //   alert("DATA SAVED", props.history.push("/view")); //save the data and redirect it to the next page
  // };