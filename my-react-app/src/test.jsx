
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Testt from './test2';
import Connectify_Landing from './Landing_Page';
import Login_Page from './Login';
import Login_Screen from './login_page/login'; 
import CreateAccount from "./createAccount_page/createAccount";
import Set_Up_Profile from "./Setup_Profiles/profile_setup"
import Group_Chat from './Chat_Groups/chat_page';
function Testing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connectify_Landing />} />
                <Route path="/home" element={<Testt />} />
                <Route path ="/login" element={<Login_Page />} />
                <Route path="/login_page" element={<Login_Screen />}/> 
                <Route path="/createAccount_page" element={<CreateAccount />} />
                <Route path="/setup" element={<Set_Up_Profile/>} />
                <Route path="/chat_page" element = {<Group_Chat/>}/>

                <Route path="/pro" element = {<Set_Up_Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Testing