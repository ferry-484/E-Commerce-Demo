import React, {useState,useEffect} from 'react';

const Home = props => {

    const [formdata, setFormdata]= useState({});
   // const [alldata, setAlldata] = useState([]);

    // useEffect(()=>{
    //      let val = JSON.parse(localStorage.getItem('data'))
    //     // setAlldata([...alldata])
    // },[alldata])

    // const getData = () =>{
    //     let val = JSON.parse(localStorage.getItem('data'));
    //     // if(val){
    //     //     setAlldata([...alldata]);

    //     // }
       
    // }

    const handleSubmit = (e) => {
        localStorage.setItem('data',JSON.stringify(formdata))
        if(e==='next'){
            props.history.push('/next')
        }
    }

    return(
        <div>
        <h1>Form Details</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>Name</label><br />
            <input type="text" value={formdata.name} onChange={(e)=>setFormdata({...formdata, name: e.target.value})} /><br />
            <label>Age</label><br />
            <input type="text" value={formdata.age} onChange={(e)=>setFormdata({...formdata, age : e.target.value})} /><br />
            <label>Gender</label><br />
            <input type="text" value={formdata.gender} onChange={(e)=>setFormdata({...formdata, gender : e.target.value})} /><br />
            <button type="submit" onClick={()=>handleSubmit('next')}>Next</button>
        </form>    
        </div>
    )
}

export default Home;