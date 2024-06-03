function LoginForm(){
    return (
    <section>
        <form action="submit" method="post">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name"></input>

        </form> 
    </section>
    )
}

export default LoginForm