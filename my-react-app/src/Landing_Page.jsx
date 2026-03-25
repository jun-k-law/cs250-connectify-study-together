
import { useNavigate } from "react-router-dom";

function Connectify_Landing(){
    const nav = useNavigate();
    return(
        <div id="conHead_div">
            <h1 id="conHead">Connectify</h1>
            <p id="welcome">Connect and Study together with your peers!</p>
                <button id = "start" onClick={() =>nav("/login_page")}>
                    Start
                </button>
        </div> 
    );
}

export default Connectify_Landing