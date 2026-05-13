import "bootswatch/dist/minty/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import './profile.css';
import  supabase  from "./SupabaseClient";

export default function Profile () {
    const nav = useNavigate();

    const [edit, setEdit] = useState(false)

    // const [info, perinfo] = UseState()

    const[showMenu, setShowMenu] = useState(false);
    const [logged, setLogged] = useState(false)
    const [options, setOptions] = useState([])

    const[bib, setBib] = useState("")
    const[sta, setSta] = useState("")
    const[cou, setCou] = useState("")
    const[maj, setMaj] = useState("")
    const[name,setName] = useState("")
    const[lname,setlName] = useState("")
    const [user, setUser] = useState(null)



    const[fbib, setfBib] = useState("")
    const[fsta, setfSta] = useState("")
    const[fcou, setfCou] = useState("")
    const[fmaj, setfMaj] = useState("")
    const[fname,setfName] = useState("")
    const[flname,setflName] = useState("")
    
    const[stuff, setStuff] = useState([])
    
    /*  
        ==========================
            USE EFFECT
        ==========================
    */  
    useEffect(() =>{
      fetchProfile();
    }, [])

    /*  
        ==========================
          Fetch User Current Data
        ==========================
    */  
    const fetchProfile = async() =>{
      const {data: {user}, error: authError} = await supabase.auth
      .getUser()


      
      const {data: personalInfo, error: infoErr} = await supabase
      .from("profiles").
      select().eq("UID", user.id).single()


      if(!( personalInfo.Name == "NULL")){
        setfName(personalInfo.Name)
      }
      if(!( personalInfo.Last_Name == "NULL")){
        setflName(personalInfo.Last_Name)
      }
      if(!( personalInfo.Groups == "NULL")){
        setfCou(personalInfo.Groups.replaceAll(",",""))

        const str = "Select_to_delete " + personalInfo.Groups.replaceAll(",","")

        const arr = str.split(" ")

        setOptions(arr.map( item => ({
          key: item,
          value: item,
          label: item
        })))
        

        console.log(arr)

      }
      if(!( personalInfo.biog == "NULL")){
        setfBib(personalInfo.biog)
      }
      if(!( personalInfo.stadning == "NULL")){
        setfSta(personalInfo.standing)
      }
      if(!( personalInfo.major == "NULL")){
        setfMaj(personalInfo.major)
      }
      
      
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


    const saved = async() => {

      const {data: {user}, error: authError} = await supabase.auth
      .getUser()

      if(!(bib == "")){
        const {error : err} = await supabase.from('profiles')
        .update({biog : bib}).eq("UID", user.id)
      }
      if(!(sta == "")){
        console.log(sta)
        const {error : err} = await supabase.from('profiles')
        .update({standing : sta}).eq("UID", user.id)
      }
      if(!(maj == "")){
        const {error : err} = await supabase.from('profiles')
        .update({major : maj}).eq("UID", user.id)
      }
      if(!(name == "")){
        const {error : err} = await supabase.from('profiles')
        .update({Name : name}).eq("UID", user.id)
      }
      if(!(lname == "")){
        const {error : err} = await supabase.from('profiles')
        .update({Last_Name : lname}).eq("UID", user.id)
      }
      if(!(cou == "")){
        const str = fcou
        const arr = str.split(" ")
        
        const filtered = arr.filter(item => item !== cou)
        const a = filtered.join(" ")
        const {error : err} = await supabase.from('profiles')
        .update({Groups : a}).eq("UID", user.id)
        
        
      }
      


      fetchProfile()
    }

    const reset = ()=>{
      setBib("") 
      setSta(undefined) 
      setCou("") 
      setMaj("") 
      setName("") 
      setlName("") 
    }

    const writing = (ch, obj) => {
      const currentText = ch.target.value;
      switch(obj){
        case "bib":
          setBib(currentText)
          break
        case "sta":
          setSta(currentText)
          break
        case "maj":
          setMaj(currentText)
          break
        case "cou":
          setCou(currentText)
          console.log(currentText)
          break
        case "nam":
          setName(currentText)
          break
        case "lna":
          setlName(currentText)
          break
          
      }

      
    }


    const print = ()=> {
      // console.log("BIB " + bib)
      // console.log("STA " + sta)
      // console.log("MAJ " + maj)
      // console.log("COU " + cou)
      console.log(name)
    }
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

  <div class="card">
    <div class="card-body">
      
      {edit? 
        <div class="names">
        <h4 class="card-title">
          <input type="text" id="autobib" placeholder="John"
                  onChange={(ch) => writing(ch, "nam")}
            >
            </input>

          <input type="text" id="autobib" placeholder="Doe"
                  onChange={(ch) => writing(ch, "lna")}
            >
            </input>
        </h4>
        </div>
      :
        <div class="names">
        <h4 class="card-title">{fname} {flname}</h4>
        </div>
      }
      

      <div class="social">
        <strong class="followers"> Followers </strong>
        <strong class="follower_count"> 0 </strong>
        <strong class="following"> Following </strong>
        <strong class="following_count"> 0 </strong>
        <button class="follow-btn btn btn-primary"> Follow</button>
      </div>
      
      
        <hr />
        
        {edit? 
          <div class="info">
            <p card-text><strong>Biography: </strong>
            <input type="text" id="autobib" placeholder="Hello I'm a..."
                  onChange={(ch) => writing(ch, "bib")}
            >
            </input>
            </p>

            <p class="standing"> <strong>Class standing: </strong>

            <select onChange={(ch) => writing(ch, "sta") }>
              <option value ="None">None</option>
              <option value ="Freshman">Freshman</option>
              <option value ="Sophmore">Sophmore</option>
              <option value ="Junior">Junior</option>
              <option value ="Senior">Senior</option>
              <option value ="Graduated">Graduated</option>
            </select>
            </p>


            <p class="major"> <strong>Major: </strong>
            <input type="text" id="autobib" placeholder="Computer Science"
                  onChange={(ch) => writing(ch, "maj")}
            >
            </input> 
            </p>
            <p class ="courses"> <strong>Drop: </strong>
              <select
                onChange={(ch) => writing(ch,"cou")}
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </p>
          </div>
          :
          <div class="info">
            <p card-text><strong>Biography: </strong>
              {fbib}
            </p>

            <p class="standing"> <strong>Class standing: </strong>
              {fsta}
            </p>


            <p class="major"> <strong>Major: </strong>
              {fmaj}
            </p>
            <p class ="courses"> <strong>Courses: </strong>
              {fcou}
            </p>
          </div>
        }
        
        
        

      <div class="link-info"> 
        <hr />
        <p class="link"> Links: </p>
        <a href="#" class="card-link">LinkedIn</a>
        <a href="#" class="card-link">Portfolio</a>
      </div>
      
      {edit?
        <div class="save-button"> 
          <hr />
          <button type="button" class="btn btn-primary" onClick={() => {setEdit(false); saved();}}>Save</button>
        </div>
        
        :
        <div class="save-button"> 
          <hr />
          <button type="button" class="btn btn-primary" onClick={() => {setEdit(true); reset}}>Edit</button>
          
        </div>
      }
      

    </div>
  </div>


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
              <button class = "navbtn" onClick={() => nav("/profile")}>Profiles</button>
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