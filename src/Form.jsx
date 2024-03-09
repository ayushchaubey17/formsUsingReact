import { useState } from "react";
import "./App.css"

//single Form
export default function Form() {
    
let [name,setName] = useState("");
let [password,setPassword] = useState("");

let handleName = (event)=>{

    // console.log(event.target.value);
    setName(event.target.value);
}


let handlePassword = (event)=>{
    
    setPassword(event.target.value);
}


let handleSubmit= (event)=>{
    event.preventDefault();
    setName("");
    setPassword("");

}

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">UserName:   </label>
            <input type="text" id="fullname" placeholder="Ayush Chaubey" value={name} onChange={handleName}/>
           
           <br />

            <label htmlFor="pwd">password:   </label>
            <input type="password" id="pwd" placeholder="********" value={password} onChange={handlePassword}/>
            <br />
            <button>submit</button>



        </form>
        
        </>
    );
}