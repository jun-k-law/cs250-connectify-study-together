
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {motion, AnimatePresence} from "motion/react"
import  supabase  from "./SupabaseClient";

function Testt(){
    const nav = useNavigate();                          // USE FOR REROUTING

    const [gr, setGr] = useState([]);                   // GROUP LIST
    const[showMenu, setShowMenu] = useState(false);     // SHOW/NOT SHOW SIDE BAR
    const [selected, setSelected] = useState(null)      // FOR THE CARDS OF THE GROUPS
    const [inpVal, setInpVal] = useState('')            // 
    const [filtered, setFilter] = useState([])          //

    const [logged, setLogged] = useState(false)         // Set logged in status
    
    
    // PUT DATA INTO LIST FROM SUPABASE
    useEffect (() => {
        async function fetchData() {
           const { data, error } = await supabase.from('stuff').select('*');

           if (error) {
                console.error("Supabase error:", error);
            } else {
                console.log("Supabase data:", data);
                setGr(data);
            }
        }

        // console.log(data.Class)
        fetchData();
    }, []);


    /*  
        ==========================
            CHECK LOAD USER
        ==========================
    */ 

    const [user, setUser] = useState(null)


    // Get current user
//     useEffect(() => {
//          //Runs on the first render
//          //And any time any dependency value changes
//      }, [prop, state]);

    useEffect(() => {
        const loadUser = async() =>{
            const {data: {user}, error} = await supabase.auth.getUser();
            if (user) {
                setUser(user)
                setLogged(true)
            }
            else{
                setUser(null)
                setLogged(false)
            }
        }

        
        // run loadUser
        loadUser()
    },[]);
    
    /*  
        ==========================
                SEARCH BAR
        ==========================
    */
    // HANDLE CHANGE EVENT FROM INPUT
    const changeHandle = (event) =>{
        const currentText = event.target.value;         // 
        setInpVal(currentText);                         // Set input val to the current text
        
        
        if (!currentText){
            setFilter([]);
            return;
        }

        const filter_Item = gr.filter(item => 
            item.Class.toLowerCase().includes(currentText.toLowerCase())// Check if input lowercase include any of the dataset lowercase
        );

        setFilter(filter_Item)
        console.log(currentText.toLowerCase())
        console.log(gr.Class.toLowerCase())
        console.log(filter_Item)
    }


    /*  
        ==========================
                Sign Out
        ==========================
    */  
    const signingOut = async() =>{

        if (logged){
            const {  error } = await supabase.auth.signOut()
            setLogged(false)
            setUser(null)
        }
        else{
            nav("/login_page")
        }
    };

    // DISPLAY
    return(
        <>
        
        <div id="navBar">                                   {/*Navigation bar*/}
            <div id = "navMenuCon">                         {/*Container button of side bar */}
                <button         
                    class="navMenu"
                    onClick={() => setShowMenu(!showMenu)}
                >                                           {/*Button mapped to setShowMenu that turn ShowMenu to the opposite of what it currently is true/false*/}
                    <i class="fa-solid fa-bars"></i>        {/*Menu Icon*/}
                </button>
            </div>
            <div id = "LogoCon">
                <p id ="Logo">Connectify</p>
            </div>
        </div>


        <div id="navBarRel"></div>                          {/*Reserve the space for nav bar*/}

        <div id="DiscoverText">                             {/*Logo name on nav bar*/}
            <p id="text">Discovery</p>
        </div>

        
        <div id="DiscoverDiv">
            <i 
                class="fa-solid fa-magnifying-glass" id="mag">
            </i>
            <input 
                type="text" 
                id="search" 
                placeholder="Search"
                autoComplete="off"
                onChange={changeHandle}>    
            </input>
            {/* {
                filtered.length
            } */}
        </div>




        <div id="groups">
            {gr.map((item,index) => (
                <motion.div 
                    className = "stuff"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    key = {index}
                    onClick={() => setSelected(item)}
                >
                    <p>{item.Class}</p>
                </motion.div>
            ))}
        </div>

        
        {/* Side Bar */}
        <AnimatePresence mode="wait">
        {showMenu &&  (
            
                <motion.div 
                    id="sidebar"
                    key="sidebar"
                    initial={{ x: "-100%"}}
                    exit={{x:"-100%"}}
                    animate={{ x: 0 }}  // Move right and fade in
                    
                    transition={{ type: "spring" , duration:0.5, bounce:0.3 }}
                    > 
                    <button id="backMenu" onClick={() => setShowMenu(false)}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class = "navbtn" id = "homebtn"onClick={() => nav("/home")}>Home</button>
                    <button class = "navbtn" onClick={() => nav("/pro")}>Profiles</button>
                    <button class = "navbtn" onClick={() => nav("/")}>Contact Us</button>
                    <button class = "navbtn" onClick={signingOut}>{logged? "Sign Out" : "Log In"}</button>
                    <button class = "navbtn" onClick={() => nav("/chat_page")}>Connections</button>
                    <div id = "rowGroup">
                        <button id = "navSettingBtn" onClick={() => nav("/")}><i class="fa-solid fa-gear"></i></button>
                        <button id = "navSettingBtn" onClick={() => nav("/")}>About</button>
                    </div>
                </motion.div>
            
        )}

        
            {selected && (
                <motion.div
                    className="back"
                    onClick={() => setSelected(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                >
                </motion.div>
            )}

            {selected && (
                <motion.div
                        initial={{
                            
                            y:"50%",
                            opacity: 0,
                            height:200,
                            width:200
                        }}
                        animate={{ 
                            x:"-17%",
                            y:"-20%",
                            opacity: 1,
                            height:400,
                            width:300

                        }}
                        exit={{ 
                            x:"17%",
                            y:"20%",
                            opacity: 0,
                            height:200,
                            width:200
                        }}
                        transition={{ type: "spring" , duration:0.5, bounce:0.3 }}
                        className="stuff popup"
                        
                    >
                        <p id = "title" color="">Group : {selected.Class}</p>
                        <p id = "place">Place : <br/> {selected.MeetingsPlace}</p>
                        <p id = "time">Time : {selected.MeetingTime}</p>
                        <p id = "occ">People : {selected.Occupancy}</p>
                        <motion.button  
                            id = "join"
                            whileHover={{
                                backgroundColor: "#ff7f50",
                                scale: [null, 1.05],
                                transition: {
                                    duration: 0.5,
                                    times: [0, 0.3, 1],
                                    ease: ["easeInOut", "easeOut"],
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            Join
                        
                        </motion.button>
                        <motion.button 
                            onClick={() => setSelected(null)} 
                            id = "out"
                            whileHover={{
                                backgroundColor: "#9a242c",
                                scale: [null, 1.1],
                                transition: {
                                    duration: 0.5,
                                    times: [0, 0.6, 1],
                                    ease: ["easeInOut", "easeOut"],
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            >
                                X
                        </motion.button>
                    </motion.div>
            )}

            
        </AnimatePresence>
        


        {/* Navigation Space */}
        
        </>
    );
}

export default Testt