import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const [user, setUser] = useState([{ userName: "", age: "", gender: "" }]);
  const history = useHistory();

  const handleAdd = (event) => {
    let path = "./next";
    history.push(path);

    let items = [];
    let itemsData = JSON.parse(localStorage.getItem("data"));

    let obj = {};
    obj["name"] = user.userName;
    obj["age"] = user.age;
    obj["gender"] = user.gender;
    items.push(obj);
    localStorage.setItem("data", JSON.stringify(items));

    // if (obj["age"] === undefined) {
    // alert("Enter age");
    //   return;
    // }
  };

  return (
    <div>
      <form>
        <h1>Home Page</h1>
        <lable>UserName:</lable>
        <input
          type="text"
          placeholder="Enter UserName"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        ></input>
        <br />
        <lable>Age:</lable>
        <input
          type="text"
          placeholder="Enter age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        ></input>
        <br />
        <label>Gender: </label>
        <input
          type="text"
          value={user.gender}
          placeholder="Enter Gender"
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        {/* Male
        <input
          type="text"
          value={user.nextOption}
          name="gender"
          onChange={(e) => setUser({ ...user, nextOption: e.target.value })}
        />
        Female */}
        <br />
        <br />
        <button type="submit" onClick={handleAdd}>
          Next
        </button>
      </form>
      {/* </Modal> */}
    </div>
  );
}

export default Home;

//submit function
// const handleSubmit = () => {
//     let users = [];
//     // let usersData = JSON.parse(localStorage.getItem("user"));
//     let obj = {};
//     obj["education"] = user.education;
//     obj["profession"] = user.profession;
//     obj["city"] = user.city;
//     users.push(obj);
//     localStorage.setItem("user", JSON.stringify(users));
//     // usersData.push(obj);
//     // localStorage.setItem("user", JSON.stringify(usersData));

//     //OBJECT CONCAT
//     let newUser = [];
//     let newObj = Object.assign({}, ...obj);

//     newUser.push(newObj);
//     localStorage.setItem("user", JSON.stringify(newUser));
//     alert("DATA SAVED", props.history.push("/view"));
//   };
// //save to localStorage
//   const handleNext = () => {
//     let users = [];
//     // let usersData = JSON.parse(localStorage.getItem("user"));
//     let obj = {};
//     obj["name"] = user.name;
//     obj["age"] = user.age;
//     obj["gender"] = user.gender;
//     users.push(obj);
//     localStorage.setItem("user", JSON.stringify(users));
//     // usersData.push(obj);
//     // localStorage.setItem("user", JSON.stringify(usersData));
//     props.history.push("/form2");
//   };
// const handleSubmit = () => {
//     let users = [];
//     let usersData = JSON.parse(localStorage.getItem("user"));
//     let obj = {};
//     obj["education"] = user.education;
//     obj["profession"] = user.profession;
//     obj["city"] = user.city;
//     users.push(...usersData, obj);
//     localStorage.setItem("user", JSON.stringify(users));
//     usersData.push(obj);
//     localStorage.setItem("user", JSON.stringify(usersData));

//     //OBJECT CONCAT
//     let newUser = [];
//     let newObj = Object.assign({}, ...obj);
//     localStorage.setItem("user", JSON.stringify(newUser));
//     newUser.push(newObj);

//     alert("DATA SAVED", props.history.push("/view"));
//   };
