import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function NameComponent(){

    const[name,setName] = useState();
      async function getName() {
      const response = await axios.get("http://localhost:8000/api");
        console.log(response.data);
        setName(response.data.name)
  }

useEffect(()=>{
getName()
        
},[])
    return(
        <>
        <h1 className="heading">HELLO</h1>
        <h2>{name}</h2>
        </>
    )
}