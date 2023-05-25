import React from 'react'

import {db} from '../firebaseConfig'
import { useState } from 'react'
import { addDoc, collection} from 'firebase/firestore'



const Request = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [address,setAddress] = useState();

    const userCollectionRef = collection(db,"requestdata")


    const handleSubmit =() => {
        addDoc(userCollectionRef,{
            name:name,
            email:email,
            address:address
        }).then(()=>{
            if(!alert("Form submitted successfully!"))document.location
='www.google.com'        })

    }



  return (
    <div className ='outer-container'>
        <p>Request Form</p>

        <form className='requestform'>
            <label>Full Name</label>
            <input type='text' placeholder="Enter your full name"
            onChange={(event)=>{
                setName(event.target.value)
                
            }}/>

           




            <label>Email Address</label>
            <input type='email' placeholder="Enter your Email"
             onChange={(event)=>{
                setEmail(event.target.value)
                
            }}/>

            <label>Enter Residential Address</label>
            <textarea type='text' placeholder="Enter your residential address "
             onChange={(event)=>{
                setAddress(event.target.value)
                
            }}>
               </textarea>
        </form>

        <button onClick={handleSubmit}>Submit</button>
       
    </div>
  )
}

export default Request
