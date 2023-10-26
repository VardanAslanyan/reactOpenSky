import './App.css';
import {useEffect, useState} from "react";
import {AuthComponents} from "./components/auth";
import {GuestComponents} from "./components/guest";

function App() {
    const [token, setToken] = useState('')

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        setToken(tokenData)
    }, []);


    return token ? <AuthComponents/> : <GuestComponents/>
}

export default App