import React,{useState, useEffect} from 'react';

export default function ShowListing() {

    const [submitteddata,setSubmittedata] = useState([])

    useEffect(()=>{
        getAllData();
    },[])

    const getAllData = () => {
        let data = JSON.parse(localStorage.getItem('array'));
        setSubmittedata(data)
        //console.log(submitteddata)
    }

    const handleDelete = index => {
        submitteddata.filter((item,idx)=>index!==idx)
    }


    return (
        <>
        <div>
            <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Profession</th>
              <th>City</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                submitteddata.map((value,index)=>{
                    return(
                        <div> 
                          <tr>
                          <td>{value.name}</td>
                          <td>{value.age}</td>
                          <td>{value.gender}</td>
                          <td>{value.edu}</td>
                          <td>{value.prof}</td>
                          <td>{value.city}</td>
                          <button onClick={()=>handleDelete(index)}>Delete</button>
                          </tr>
                          
                        </div>
                    )
                })
            }
            </tbody>  
            </table>
        </div>
        </>
    )
}







