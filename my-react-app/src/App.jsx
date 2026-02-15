
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Connectify(){
  
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App(props) {

  
  return (
    <BrowserRouter>
      <div id="conHead_div">
        <h1 id="conHead">Connectify</h1>
        <p>Connect and Study together with your peers!</p>
        <button id = "start">
          Start
        </button>
      </div>
      

      <Routes>
        <Route path="/" element = {<Connectify/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
  
    
}


export default App;