import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/projects/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Users from "./components/users/Users";
function MainRouter(){
    return(
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<AboutMe/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/services" element={<Services/>}/>
                <Route exact path="/contacts" element={<Contact/>}/>
                <Route exact path="/users" element={<Users/>}/>
            </Routes>
        </>
    )
}

export default MainRouter;