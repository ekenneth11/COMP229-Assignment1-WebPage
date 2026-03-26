import logo from '../assets/kennethLogo.png'
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <>  
            <nav className = "navbar m-4">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <NavLink className='navbar-brand me-4' to='/'>
                        <img src={logo} alt="logo" style={{ width: 150}}/>
                    </NavLink>
                    <ul className="nav nav-pills d-flex flex-row">
                        <li className="nav-item">
                            <NavLink to="/" className = "nav-link ">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about" className = "nav-link">About Me</NavLink>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                                Project
                            </Link>
                            <ul className = "dropdown-menu">
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Project List </NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Add a new Project </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                                Services
                            </Link>
                            <ul className = "dropdown-menu">
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Service List </NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Add a new Service </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                                Contact
                            </Link>
                            <ul className = "dropdown-menu">
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Contact List </NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Add a new Contact </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                                User
                            </Link>
                            <ul className = "dropdown-menu">
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Users List </NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/'>Add a new User </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}

export default Header;