import { useState } from "react";
import axios from 'axios';

const Insert=()=>{
    const [input,setInput]=useState({});
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit=()=>{
        let url='http://localhost:8000/user/usersave';
        axios.post(url,input).then((res)=>{
            alert("data saved");
        })
    }

    return(
        <>
        <h1>Insert Page</h1>
        Enter Author Name : <input type="text" name="aname" value={input.aname} onChange={handleInput} /> <br /> <br />
        Enter Book Name : <input type="text" name="bname" value={input.bname} onChange={handleInput}/> <br /> <br />
        Enter price : <input type="text" name="price" value={input.price} onChange={handleInput}/> <br /> <br />
        <input type="submit" onClick={handleSubmit} />
        </>
    )
}

export default Insert;