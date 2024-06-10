import useSessionStore from "../stores/sessionStore";
import useUserStore from "../stores/userStore";


function LoginForm(){

    const login = useSessionStore((state) => state.login);
    const users = useUserStore((state) => state.userList);

    function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('userName') as string;
        const password = formData.get('userPassword') as string;

        const userExist = users.find(user => user.username);
        
        if(userExist?.password == password){
            const userMovieList = userExist.userMovieList;
            const user = { username, password, userMovieList };
            login(user);
        console.log(user.username + ' är inloggad ');
        console.log(user.userMovieList);
        } else {
            console.log("Felaktiga användaruppgifter")
        }  
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
    </section>
    )
}

export default LoginForm