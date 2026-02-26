import { useNavigate } from "react-router-dom";

export default function Login () {
    const goTo = useNavigate();
    return (
        <>
            <div className="whole_page">
                <label for="exampleInputEmail1" class="form-label mt-4"> Email address </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"/>
                    <small id="passHelp" class="form-text text-muted"> <u>Forgot password?</u> </small>
                </div>
            <div/>

            <button onClick={() => goTo("/test2")} class="btn btn-primary"> Log In </button>
    </>
    );
}