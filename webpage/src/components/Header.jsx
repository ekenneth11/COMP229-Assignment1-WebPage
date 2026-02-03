import logo from '../assets/kennethLogo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header(){
    return(
        <>  
            <div className="header">
                <img src={logo} alt="Kenneth's Logo" className='mainLogo'/>
                <nav className='nav-links'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contacts">Contact Me</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Header;