import { data, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../SupabaseClient";
import "./chat.css"
import {motion, AnimatePresence} from "motion/react"





export default function Group_Chat(){
    const nav = useNavigate();                          // USE FOR REROUTING

    const [gr, setGr] = useState([]);
    const[showMenu, setShowMenu] = useState(false);     // SHOW/NOT SHOW SIDE BAR
    const [logged, setLogged] = useState(false)         // Set logged in status
    const [user, setUser] = useState("")
    const [namew, setName] = useState("")
    const [prof, setProf] = useState([])
    const [chatlog, setChatlog] = useState([])

    const [textMessages, setTextMessages] = useState("")


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

    // Get current user
//     useEffect(() => {
//          //Runs on the first render
//          //And any time any dependency value changes
//      }, [prop, state]);

    useEffect(() => {
        const loadUser = async() =>{
            const {data: {user}, error} = await supabase.auth.getUser();
            if (user) {
                setUser(user.id)
                console.log(user.id)
                setLogged(true)

            }
            else{
                setUser(null)
                setLogged(false)
            }
        }

        loadUser();

        
        
    },[]);

    useEffect(()=>{
        const intervalId = setInterval(() => {
        
            const loadData = async() =>{
                const {data, error} = await supabase.from('Chat').select('*');

                if(error){
                    console.log("Supabase error:", error)
                }else{
                    // console.log(data)
                    setChatlog(data)

                    
                }
            }
            
            loadData();
        }, 1500); // Runs every 5000ms (5 seconds)

        return () => {
            clearInterval(intervalId);
        };
        
    },[])

    useEffect (() =>{
        const loadDataw = async() =>{

            
            const {data, error} = await supabase.from('profiles').select('*');

            if(error){
                console.log("Supabase error:", error)
            }else{
                console.log( data)
                setProf(data)
            }
        }
        loadDataw();
    },[])
    




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


    const writingMessage = (event) =>{
        
        const currentText = event.target.value;
        if(!currentText){
            
            console.log("Can't access")
            return;
        }

        setTextMessages(currentText)

        // console.log(event.target.value)
    }


    const check = async() => {
        const timeString = new Date().toLocaleTimeString();
        const {data: {user}, error} = await supabase.auth.getUser();

        const { data } = await supabase.from('profiles').select('*');
        const profile = data.find(p => p.UID === user.id);

        console.log(profile?.Name);

        const a = profile?.Name

        console.log(a + " " + textMessages + " " + timeString)

        if(textMessages){
            const {err} = await supabase
            .from('Chat')
            .insert([{User: a, Text: textMessages, Time: timeString}])
            console.log('sent')
        }
        
        

    }
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

        <div id="navBarRel"></div>      
        
        <div id="gcon">
            <div id="chat-box">
                {gr.map((item,index) => (
                    <motion.div key={index} 
                        id="classes"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <p>{item.Class}</p>

                    </motion.div>
                ))}
            </div>

            

            <div id="messages-box" >
                
                <div id="mess-nav"></div>
                <div id="text-box">
                    

                    <div id = "aa">
                        {chatlog.map((item, index) => (
                        
                        <div className="convo-chat"
                                key = {index}>

                            <div id= "pic"></div>
                            <div id="nnt">
                                <p id="test">{item.User} <span id="time-text">{item.Time}</span></p>
                                <div id = "tb">
                                    <p >{item.Text}</p>
                                </div>
                            </div>
                            

                            

                        </div>
                    ))}

                    </div>
                </div>
                <div id="texting-nav">
                    
                        <input type="text" id="texting2" placeholder="Write a message" onChange={writingMessage} />
                    
                    
                    <motion.button 
                        id="send" onClick={check}
                        whileHover={{ scale: 1.1 }}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </motion.button>
                </div>
            </div>
        
        </div>                    {/*Reserve the space for nav bar*/}

        



        
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
        </AnimatePresence>
        


        
        
        </>
    );
}