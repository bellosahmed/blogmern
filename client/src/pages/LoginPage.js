import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Usercontext } from "./Usercontext";


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setredirect] = useState(false);
    const { setUserInfo } = useContext(Usercontext)

    async function login(ev) {
        ev.preventDefault();
        const respone = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (respone.ok) {
            respone.json().then(userInfo => {
                setUserInfo(userInfo);
                setredirect(true);
            });
        } else {
            alert('wrong credentials');
        }
    }

    if (redirect) {
        return < Navigate to={'/'} />
    }
    return (
        <form className="login" onSubmit={login}>
            <h1> Login</h1>
            <input type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />
            <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button> Login</button>
        </form>
    );
}