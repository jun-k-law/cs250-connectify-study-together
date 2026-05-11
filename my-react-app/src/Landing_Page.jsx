
import { useNavigate } from "react-router-dom";

function Connectify_Landing(){
    const nav = useNavigate();
    return(
        <div id="conHead_div">
            <h1 id="conHead">Connectify</h1>
            <p>Connect and Study together with your peers!</p>
                <button id = "start" onClick={() =>nav("/login_page")}>
                    Start
                </button>
            <div>
            <a href="https://docs.google.com/document/d/1VmhrWeGaSoA8Z1fFoUfnm6ds9oYxEkLkGJMdaK7Q66c/edit?usp=sharing" target="_blank"> Terms of Service</a>
            
            <p style={{color: 'black', font: '12px'}}>By accessing this website, you agree to be bound by these Terms of Service.</p>
           
         </div>
           
        </div> 
    );
}

export default Connectify_Landing