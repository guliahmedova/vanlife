import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
    return (
        <>
            <nav className='host-navbar'>
                <NavLink end className={({ isActive }) => isActive ? "linkActive" : ""} to=".">Host</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="income">Income</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="vans">Vans</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout