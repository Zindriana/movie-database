import useSessionStore from "../stores/sessionStore";
import useUserStore from "../stores/userStore";
import React, { useState } from 'react';
import "../styles/formStyle.css";


function LoginForm(){
    const [message, setMessage] = useState('');

    const login = useSessionStore((state) => state.login);
    const users = useUserStore((state) => state.userList);

    function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('userName') as string;
        const password = formData.get('userPassword') as string;

        const userExist = users.find(user => user.username === username);
        
        if(userExist?.password == password){
            const userMovieList = userExist.userMovieList;
            const user = { username, password, userMovieList };
            login(user);
        } else {
            setMessage('Felaktiga användaruppgifter');
    }
    }

    return (
    <section className="formContainer">
        <h2 className="heading">Logga in</h2>
        <form className="formContainer" onSubmit={handleLoginSubmit} method="post">
            <label htmlFor="userName"></label>
            <input type="text" id="userName" name="userName" placeholder="Användarnamn"></input>
            <label htmlFor="userPassword"></label>
            <input type="password" id="userPassword" name="userPassword" placeholder="Lösenord"></input>
            <button type="submit">Logga in</button>
        </form>
        {message && <p className="message">{message}</p>}       
    </section>
    )
}

export default LoginForm