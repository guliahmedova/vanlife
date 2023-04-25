import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
    return (
        <>
            <nav className='host-navbar'>
                <NavLink end className={({ isActive }) => isActive ? "linkActive" : ""} to="/host">Host</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/host/income">Income</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/host/vans">Vans</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout