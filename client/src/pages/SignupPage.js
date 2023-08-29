import { useState } from "react";

export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        const respone = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (respone.status === 200) {
            alert('Signup good');
        } else {
            alert('Signup failed');
        }
    }

    return (
        <form className="signup" onSubmit={register}>
            <h1>Signup</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button>Signup</button>
        </form>
    );
} 