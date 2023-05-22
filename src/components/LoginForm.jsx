import React, {useEffect, useState} from "react";
// import GoogleLogin from "react-google-login";
import { useDispatch ,useSelector} from "react-redux";
import axios from "axios";

import "../style/loginform.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const users = useSelector(state => state.auth.users); 
    const loggedInUser = useSelector(state=>state.auth.loggedInUser);

    const Login = (e)=>{

        e.preventDefault();
        // console.log(users);
        console.log("login firedddd!");

        console.log(username  ,"    " , password);
       
        axios.post('http://localhost:5000/api/auth/login' , {
            username:username,
            password:password,
        }).then( (res, err)=>{
            if(res.status ==200){
                sessionStorage.setItem('userNow',res.data.username)
                navigate("/");
            }else{
                alert("wrong credentials!!");
                console.log(err);
            }

            console.log(res);
            console.log(res.data.username);
            console.log("jwt is : ",res.data.accessToken);
           
        });

        const user_name = sessionStorage.getItem('userNow');
    
        return(
            dispatch({
                type :"LOGIN",
                 payload:username,
            })
        );
        

        // const payload = users.find(user => user.username === username && user.password === password)
        // if(payload){

        //     dispatch({
        //         type :"LOGIN",
        //         payload:true,
        //     })
        //     alert("success!!!!")
        // }else{
        //     alert("wrong credentials!!")
        // }

    }

    
    

  return (
    <div className="login">
        <div className='login_cont'>
        
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>

        <button className="login-btn" onClick={Login}>Login</button>

        <p className="text"> Or Register Now</p>

        {/* <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                    <GoogleLogin className="blue"
                        clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} // alternative is true, which keeps the user signed in
                        icon={false}    // alt is true, and this puts the google logo on your button, but I don't like it
                        theme="dark"  // alternative is light, which is white
                    />
                </div>
            </div> */}

            <Link to='/register'>
            <button className="login-btn">Register</button>
            </Link>

    </div>
    </div>
    
  )
}

export default LoginForm