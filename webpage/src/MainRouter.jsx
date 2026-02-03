import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
function MainRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<AboutMe/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/services" element={<Services/>}/>
                <Route exact path="/contacts" element={<Contact/>}/>
            </Routes>
        </>
    )
}

export default MainRouter;