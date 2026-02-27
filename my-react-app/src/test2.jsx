
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {motion, AnimatePresence} from "motion/react"


function Testt(){
    const nav = useNavigate();
    const[showMenu, setShowMenu] = useState(false);
    
    return(
        <div>
            <button onClick={() => nav("/")}>Back</button>
        </div>


        <div id="navBarRel"></div>

        <div id="DiscoverText"></div>
        <div id="DiscoverDiv"></div>

        {/* Side Bar */}
        <AnimatePresence mode="wait">
        {showMenu &&  (
            <motion.div 
                id="sidebar"
                key="sidebar"
                initial={{x:"-100%"}}
                exit={{x:"-100%"}}
                animate={{x:0}}
                transition={{type:'spring', duration:0.4, bounce:0.3}}
            >
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
                
            </motion.div>
        )}
        </AnimatePresence>
        
        {/* Navigation Space */}
        
        </>
    );
}

export default Testt