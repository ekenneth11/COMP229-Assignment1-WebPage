
import './home.css'
import logo from '../assets/kenneth-logo.png';
import homeActive from '../assets/home.gif';
import home from '../assets/home.png';
import info from '../assets/info.png';
import infoActive from '../assets/info.gif';
import project from '../assets/projects.png';
import projectActive from '../assets/projects.gif';
import service from '../assets/services.png';
import serviceActive from '../assets/services.gif';
import contactActive from '../assets/contact.gif';
import contact from '../assets/contact.png';
import { NavLink } from 'react-router-dom';

function Home(){
    return(
        <>
        <div className="welcome">
            <h1>Welcome to Kenneth Bautista's Portfolio</h1>
            <h3>Mission Statement</h3>
            <p>Combining technical precision with creative design. 
                My goal is to build digital experiences that are not only functional 
                and data-driven but also intuitive and visually engaging.</p>
        </div>
            <div className='nav-links'>
                <NavLink to='/'>
                    {({ isActive }) => (
                        <img src={isActive ? homeActive : home}
                            className='nav-icon'
                            alt='Home'>
                        </img>)
                    }
                </NavLink>
                <NavLink to='/aboutme'>
                    {({ isActive }) => (
                        <img src={isActive ? infoActive : info}
                            className='nav-icon'
                            alt='About Me'>
                        </img>)
                    }
                </NavLink>
                <NavLink to='/projects'>
                    {({ isActive }) => (
                        <img src={isActive ? projectActive : project}
                            className='nav-icon'
                            alt='Projects'>
                        </img>)
                    }
                </NavLink>
                <NavLink to='/services'>
                    {({ isActive }) => (
                        <img src={isActive ? serviceActive : service}
                            className='nav-icon'
                            alt='Services'>
                        </img>)
                    }
                </NavLink>
                <NavLink to='/contact'>
                    {({ isActive }) => (
                        <img src={isActive ? contactActive : contact}
                            className='nav-icon'
                            alt='Contact'>
                        </img>)
                    }
                </NavLink>
                <img src={logo} alt="My Logo" className='image-logo'/>
            </div>
            
        
        </>
    )
}

export default Home;