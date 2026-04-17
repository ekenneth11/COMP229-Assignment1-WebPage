import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Users from "./components/users/Users";
import References from "./components/references/References";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRout";
function MainRouter() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutMe />} />
                <Route exact path="/projects" element={
                    <PrivateRoute>
                        <Projects />
                    </PrivateRoute>
                } />

                <Route exact path="/services" element={
                    <PrivateRoute>
                        <Services />
                    </PrivateRoute>
                } />
                <Route exact path="/references" element={
                    <PrivateRoute>
                        <References />
                    </PrivateRoute>
                } />
                {/* <Route exact path="/contacts" element={<Contact/>}/> */}
                <Route exact path="/users" element={
                    <PrivateRoute>
                        <Users />
                    </PrivateRoute>
                } />
                <Route exact path="/users/signin" element={<Signin />} />
                <Route exact path="/users/signup" element={<Signup />} />


            </Routes>
        </>
    )
}

export default MainRouter;