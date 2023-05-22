import {React,useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "../style/loginform.css";
import { useNavigate } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const register = (e)=>{

        e.preventDefault();

        console.log("register firedddd!");

        dispatch({
            type :"REGISTER",
            payload:{
                id: (new Date).getTime(),
                username,userEmail,password
            }
        })
        
        console.log(username  ,"    " , password);

        axios.post('http://localhost:5000/api/auth/register' ,{
                username:username,
                email:userEmail,
                password:password,
        }).then( (response ,err)=> {

            // console.log(response); // show

            if(response.status === 201){
                sessionStorage.setItem('userNow' ,response.data.username);
                navigate("/");
            }else{
                console.log(err);
            }

        });

    }    

  return (
    <div className="login">
    <div className='login_cont'>
    
    <h1>Register</h1>
    <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
    <input type="text" placeholder="email" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>

   
    <button className="login-btn" onClick={register} >Register</button>
  
   </div>
   </div>

  )
}

export default Register