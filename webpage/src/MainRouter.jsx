import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
function MainRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/aboutme" element={<AboutMe/>}/>
            </Routes>
        </>
    )
}

export default MainRouter;