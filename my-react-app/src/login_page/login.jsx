import { useNavigate } from "react-router-dom";
import './login.css';
import { useState } from "react";
import supabase from "../SupabaseClient";


export default function Login () {
    const goTo = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handlesSignUp = async (e) => {
        e.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if(error){
            setMessage(error.message)
            return;
        }

        setMessage("Check your email!")
        
        


        if (data?.session) goTo("/home");
    };




    return (
        <> 
            <div className="card">
                <div className="card-body">
                    <h2 className="top"> Sign in </h2>
                    
                    <form onSubmit = {handlesSignUp}>
                    <div className="login">
                <label for="exampleInputEmail1" class="form-label mt-4">Email address:</label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
                <div className="pass">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password:</label>
                    <input value = {password} onChange = {(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"/>
                    <div className="forgot-password">  
                        <small id="passHelp" class="form-text text-muted"> <u>Forgot password?</u> </small>
                </div>
            <div/>
                         </div>

            <div>

            <div className="create-button"> 
                <button onClick={() => goTo("/createAccount_page")} class="btn btn-primary"> Create account </button>
            </div>

            </div>  
            
            <div className="login-button"> 
                <button type = "submit"  class="btn btn-primary"> Log In </button>

            </div>
            {message && <p class = "message"> {message} </p>}
            
            </form>
                </div>
            </div>



    </>
    );
}
