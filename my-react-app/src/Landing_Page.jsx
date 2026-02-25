
import { useNavigate } from "react-router-dom";

function Connectify_Landing(){
    const nav = useNavigate();
    return(
        <div id="conHead_div">
            <h1 id="conHead">Connectify</h1>
            <p>Connect and Study together with your peers!</p>
                <button id = "start" onClick={() =>nav("/test2")}>
                    Start
                </button>
        </div> 
    );
}

export default Connectify_Landing