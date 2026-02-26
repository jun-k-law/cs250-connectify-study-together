
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Testt from './test2';
import Connectify_Landing from './Landing_Page';
import Login_Page from './Login';

function Testing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connectify_Landing />} />
                <Route path="/test2" element={<Testt />} />
                <Route path ="/login" element={<Login_Page />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Testing