import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import LandingPage from "./page/LandingPage";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";


function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element = {<>
        <LandingPage />
        </>} />
        <Route path="/project" element = {<Projects/>} />
        <Route path="/experience" element = {<Experience/>} />
        <Route path="/education" element = {<Education/>} />
      </Routes>
    </>
  );
}

export default App;