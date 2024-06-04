function LoginForm(){
    return (
    <section>
        <form action="submit" method="post">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Användarnamn"></input>
            <label htmlFor="password"></label>
            <input type="text" id="password" name="name" placeholder="Lösenord"></input>
        </form> 
    </section>
    )
}

export default LoginForm