import { NavLink } from 'react-router-dom'
import './style.scss'
import { routerLinks } from '../../router'

function AdminSideBar() {

    function handleSignOut() {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return(
        <div className="admin-side-bar">
            <NavLink to={routerLinks.ADMIN_CATEGORIES}>Categories</NavLink>
            <NavLink to={routerLinks.ADMIN_PRODUCTS}>Products</NavLink>
            <NavLink to={routerLinks.ADMIN_NOTIFICATION}>Notifications</NavLink>
            <NavLink to={routerLinks.ADMIN_SETTINGS}>Settings</NavLink>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}


export default AdminSideBar