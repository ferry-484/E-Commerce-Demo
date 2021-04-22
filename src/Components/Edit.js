
import React, { useState, useEffect } from "react";

function EditPage() {
  const [edit, setEdit] = useState([]);
  useEffect(() => {
    getData();
  }, [edit]);

  const getData = () => {
    setEdit(JSON.parse(localStorage.getItem("data")));
  };

  const handleUpdate = (id) => {
    let prevData = JSON.parse(localStorage.getItem("data"));
    let objectToBeUpdate = prevData[id];
    objectToBeUpdate["name"] = setEdit;
    //objectToBeUpdate["age"] = nameToBeUpdate;
    prevData.splice(id, 1, objectToBeUpdate);
    localStorage.setItem("data", JSON.stringify(prevData));
  };

  return (
    <>
      <div>
        <h1>Edit User</h1>
        {edit.length > 0 ? (
          edit.map((value, index) => {
            return (
              <div>
                <label>UserName: </label>
                <input
                  type="text"
                  placeholder="name"
                  defaultValue={value.name}
                  onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                />
                <br />

                <label>Age: </label>
                <input
                  type="text"
                  placeholder="age"
                  defaultValue={value.age}
                  onChange={(e) => setEdit({ ...edit, age: e.target.value })}
                />
                <br />

                <label>Gender: </label>
                <input
                  type="text"
                  placeholder="gender"
                  defaultValue={value.gender}
                  onChange={(e) => setEdit({ ...edit, gender: e.target.value })}
                />
                <br />

                <label>Education: </label>
                <input
                  type="text"
                  placeholder="education"
                  defaultValue={value.education}
                  onChange={(e) =>
                    setEdit({ ...edit, education: e.target.value })
                  }
                />
                <br />

                <label>Profession: </label>
                <input
                  type="text"
                  placeholder="profession"
                  defaultValue={value.profession}
                  onChange={(e) =>
                    setEdit({ ...edit, profession: e.target.value })
                  }
                />
                <br />

                <label>Education: </label>
                <input
                  type="text"
                  placeholder="city"
                  defaultValue={value.city}
                  onChange={(e) => setEdit({ ...edit, city: e.target.value })}
                />
                <br />
                <button onClick={handleUpdate}>Update</button>
              </div>
            );
          })
        ) : (
          <h1>No update Added..</h1>
        )}
      </div>
    </>
  );
}

export default EditPage;


