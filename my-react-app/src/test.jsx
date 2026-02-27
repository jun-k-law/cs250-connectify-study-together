import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Testt from './test2';
import Connectify_Landing from './Landing_Page';


function Testing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connectify_Landing />} />
                <Route path="/test2" element={<Testt />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Testing