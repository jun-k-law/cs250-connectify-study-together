
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Testt from './test2';
import Connectify_Landing from './Landing_Page';
import Login_Page from './Login';
import Login_Screen from './login_page/login'; 

function Testing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connectify_Landing />} />
                <Route path="/home" element={<Testt />} />
                <Route path ="/login" element={<Login_Page />} />
                <Route path="/login_page" element={<Login_Screen />}/> 
            </Routes>
        </BrowserRouter>
    );
}

export default Testing