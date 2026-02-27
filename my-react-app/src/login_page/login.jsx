import { useNavigate } from "react-router-dom";
import './login.css';

export default function Login () {
    const goTo = useNavigate();
    return (
        <div className="all"> 

            <div class="card">
                <div class="card-body">
                    <h2 className="top"> Sign in </h2>
                    <div className="login">
                <label for="exampleInputEmail1" class="form-label mt-4"> Email address </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
                <div className="pass">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"/>
                    <div className="forgot-password">  
                        <small id="passHelp" class="form-text text-muted"> <u>Forgot password?</u> </small>
                </div>
            <div/>
                         </div>
                   
            <div className="login-button"> 
                <button onClick={() => goTo("/test2")} class="btn btn-primary"> Log In </button>
            </div>
            
                </div>
            </div>



    </div>
    );
}