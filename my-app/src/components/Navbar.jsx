import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/">vanlife</NavLink>
            </div>
            <ul className="nav-menu">
                <li><NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="host">Host</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="about">About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="vans">Vans</NavLink></li>
                <li><Link to="login" className='login-link'><CgProfile /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar;