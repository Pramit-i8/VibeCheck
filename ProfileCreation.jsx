import React, { useState } from "react";        //Import the useState hook from the React library
import cameraIcon from './assets/camera.png';


export const ProfileCreation = (props) => {   //Define 'ProfileCreation' component and accepts props as its parameters
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [lastName, setLastName] = useState('');       //Declare a state variables using the useState hook, initialized to an empty string. 
    const [firstName, setFirstName] = useState('');     //Also, define a functions set... that can be used to update the inicial variable state.
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {  //Handler function that logs the 'email' variable values to the console when the form is submitted
        e.preventDefault();
        console.log(email);
    }

    return (
    <div className="Profile-Creation-form">
            
            <h2>Almost done setting up your profile</h2>            
        <form className="auth-form-container" onSubmit={handleSubmit}>  
            <h2>Upload Photo</h2>
            <img src={cameraIcon}/>
           
            <label htmlFor="Fist Name">Enter First Name</label>  
            {/* The values for these inputs are controlled by using state variables, which are updated using the event handler*/}
            <input value={firstName} firstName="Fist Name" onChange={(e) => setFirstName(e.target.value)} id="First Name" placeholder="first Name" />
            <label htmlFor="Last Name">   Enter Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}type="Last Name" placeholder="last Name" id="Last Name" name="Last Name" />
            <label htmlFor="email">Confrim your email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="Date of Birth">   Enter your date of birth</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="Date of Birth" placeholder="MM/DD/YYYY" id="Date of Birth" name="Date of Birth" />
            <button type="submit">Create Profile</button> 
            {/*When the user submits the form, the handleSubmit function will be called. However, the implementation of this function is not provided in the code*/}
        </form>
    </div>
    )
}
