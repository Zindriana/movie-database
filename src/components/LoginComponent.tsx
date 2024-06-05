import useSessionStore from "../stores/sessionStore";
import SignUp from "./SignUpComponent";

function LoginForm(){

    const login = useSessionStore((state) => state.login);

    function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('userName') as string;
        const password = formData.get('userPassword') as string;

        const user = { username, password };

        login(user);
        console.log(user.username + ' är inloggad');
    }
    return (
    <section>
        <p>Logga in</p>
        <form onSubmit={handleLoginSubmit} method="post">
            <label htmlFor="userName"></label>
            <input type="text" id="userName" name="userName" placeholder="Användarnamn"></input>
            <label htmlFor="userPassword"></label>
            <input type="password" id="userPassword" name="userPassword" placeholder="Lösenord"></input>
            <button type="submit">Logga in</button>
        </form>
        <p>Skapa ny användare</p>
        <SignUp />
    </section>
    )
}

export default LoginForm