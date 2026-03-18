import { useNavigate } from "react-router-dom";


function Login_Page(){
    const nav = useNavigate();
    return(
        <div>
            <button onClick={() => nav("/")}>Log</button>
        </div>
    );
}

export default Login_Page