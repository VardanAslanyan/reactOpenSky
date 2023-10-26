import { Route, Routes, NavLink} from "react-router-dom";
import React from "react";

import './style.scss'
import { routerList } from "../../router/routerList";
import Admin from '../../pages/admin'
import { sideBar } from "../../router/routerList";


export function AuthComponents() {


    const handleClick = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return <div>
        <nav><NavLink onClick={handleClick} to={routerList.guest.GUSET_COMPONENT}>Log out</NavLink></nav>
        <div className="content">
        <div className={'side-bar'}>
            <ul>
                   {sideBar.length ? sideBar.map((item, index) => {
                    return <li><NavLink key={index} to={item.path}>{item.title}</NavLink></li>
                }) : null}

            </ul>
        </div>
        <div>
            <Routes>
                {sideBar.length ? sideBar.map((item, index) => {
                    return <Route key={index} path={item.path} element={item.component}/>
                }) : null}

                <Route path={routerList.auth.ADMIN} element={<Admin/>}></Route>
                {/* <Route path={routerList.guest.GUSET_COMPONENT} element={<GuestComponents/>}></Route> */}
            </Routes>
        </div>
        </div>
    </div>
}