
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {motion, AnimatePresence} from "motion/react"


function Testt(){
    const nav = useNavigate();
    const[showMenu, setShowMenu] = useState(false);
    
    return(
        <>
        {/* Navigation bar */}
        <div id="navBar">
            <div id = "navMenuCon">
                <button 
                    class="navMenu"
                    onClick={() => setShowMenu(!showMenu)}>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div id = "LogoCon">
                <p id ="Logo">Connectify</p>
            </div>
        </div>


        <div id="navBarRel"></div>

        <div id="DiscoverText"><p id="text">Discovery</p></div>
        <div id="DiscoverDiv"></div>

        {/* Side Bar */}
        
        {showMenu &&  (
            <div id = "sidebar">
                <button id="backMenu" onClick={() => setShowMenu(!showMenu)}>
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button class = "navbtn" id = "homebtn"onClick={() => nav("/")}>Home</button>
                <button class = "navbtn" onClick={() => nav("/")}>My Groups</button>
                <button class = "navbtn" onClick={() => nav("/")}>Contact Us</button>
                <button class = "navbtn" onClick={() => nav("/")}>Login</button>
                <div id = "rowGroup">
                    <button id = "navSettingBtn" onClick={() => nav("/")}><i class="fa-solid fa-gear"></i></button>
                    <button id = "navSettingBtn" onClick={() => nav("/")}>Settings</button>
                </div>
                
            </div>
        )}
        
        
        {/* Navigation Space */}
        
        </>
    );
}

export default Testt