
import { useNavigate } from "react-router-dom";

function Testt(){
    const nav = useNavigate();
    return(
        <div>
            <button onClick={() => nav("/login_page")}>Back</button>
        </div>
    );
}

export default Testt