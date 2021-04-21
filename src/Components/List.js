import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const List = () => {
  const [list, setList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getData();
  }, [list]);

  const getData = () => {
    setList(JSON.parse(localStorage.getItem("data")));
  };
  const saveData = () => {
    let path = "/";
    history.push(path);
  };
  return (
    <>
      <div>
        <h1>User Details</h1>
        <button onClick={saveData} type="submit">
          Back to HomePage
        </button>
        <table>
          <tr>
            <th>UserName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Profession</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
          {list.map((value, index) => {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.gender}</td>
                <td>{value.education}</td>
                <td>{value.profession}</td>
                <td>{value.city}</td>
                <td>
                  <button type="submit">Edit</button>
                </td>
                <td>
                  <button type="submit">Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default List;
