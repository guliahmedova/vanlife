import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to="/">vanlife</Link>
            </div>
            <ul className="nav-menu">
                <li><Link to="/host">Host</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;