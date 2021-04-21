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

    let newData = [];
    newData.push(Object.assign({}, ...items));
    localStorage.setItem("data", JSON.stringify(newData));
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
