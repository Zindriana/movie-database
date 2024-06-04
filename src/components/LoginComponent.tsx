import useSessionStore from "../stores/sessionStore";

function LoginForm(){

    const login = useSessionStore((state) => state.login);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('name') as string;
        const password = formData.get('password') as string;

        const user = { username, password };

        login(user);
        console.log('Inloggning lyckades! 🎉');
    }
    return (
    <section>
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Användarnamn"></input>
            <label htmlFor="password"></label>
            <input type="password" id="password" name="password" placeholder="Lösenord"></input>
            <button type="submit">Logga in</button>
        </form> 
    </section>
    )
}

export default LoginForm