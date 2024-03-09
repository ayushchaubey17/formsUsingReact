import React, { useState } from 'react';
import './App.css'


export default function MultipleForm (){

    let [formData,setFormData] = useState({
        fullName:"",
        fullPassword:"",
        ages:18
    })
let handleChange = (event)=>{
    let changeField = event.target.name;
    let newValue = event.target.value;

    setFormData(
        (obj)=>{
            // obj[changeField]= newValue;

            return {... obj ,[changeField]:newValue} ;

        }
    );



}


  return (
    <div>
          <form >
            <label htmlFor="fullnames">UserName:   </label>
            <input type="text" id="fullnames" placeholder="Ayush Chaubey" name='fullName' value={formData.fullName} onChange={handleChange}/>
           
           <br />

            <label htmlFor="pwds">password:   </label>
            <input type="password" id="pwds" placeholder="********" name='fullPassword' value={formData.fullPassword} onChange={handleChange}/>
            <br />

            <label htmlFor="age"> age :   </label>
            <br />
            <input type="number" id="age" max="32" min={18}   name='ages' value={formData.ages} onChange={handleChange}/>
            <br />

            <button>submit</button>



        </form>
    </div>
  )
}
