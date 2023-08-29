import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Usercontext } from "./pages/Usercontext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(Usercontext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: "include",
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(userInfo => {
                        setUserInfo(userInfo);
                    });
                } else {
                    // Handle the error here if the response is not successful
                    console.log("Failed to fetch user profile");
                }
            })
            .catch(error => {
                // Handle any errors that occur during the fetch request
                console.log("Error occurred while fetching user profile:", error);
            });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: "include",
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo"> Blog</Link>
            <nav>
                {username && (
                    // If the username is available, render the authenticated links
                    <>
                        <span> Hello {username}</span>
                        <Link to="/create">Create Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    // If the username is not available, render the unauthenticated links
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )
                }
            </nav>
        </header>
    );
}
