import React,{useState,useEffect} from 'react'

export default function Next(props) {

    const [formdata,setFormdata]= useState({});
    const [alldata, setAlldata] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = () => {
        let val = JSON.parse(localStorage.getItem('array'))
        if(val){
            setAlldata([...val]);
        }
       
    }

    const handleSubmit = (e) => {
        let savedData = JSON.parse(localStorage.getItem('data'))
        let obj = {...savedData, ...formdata}
        alldata.push(obj)
        localStorage.setItem('array',JSON.stringify(alldata))
       
        if(e==='submit'){
            props.history.push('/submit')
        }

    }

    return (
        <div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <label>Education</label><br />
        <input type="text" value={formdata.edu} onChange={(e)=>setFormdata({...formdata, edu : e.target.value})} /><br />
        <label>Profession</label><br />
        <input type="text" value={formdata.prof} onChange={(e)=>setFormdata({...formdata, prof : e.target.value})} /><br />
        <label>City</label><br />
        <input type="text" value={formdata.city} onChange={(e)=>setFormdata({...formdata, city : e.target.value})} /><br />
        <button type="submit" onClick={()=>handleSubmit('submit')}>Next</button>
        </form>  
        </div>
    )
}

