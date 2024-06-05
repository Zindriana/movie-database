import useUserStore from "../stores/userStore";

function SignUp(){

    const signUp = useUserStore((state) => state.addUser);
    const userList = useUserStore((state) => state.userList)

    function handleSignUpSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('newUserName') as string;
        const password = formData.get('newUserPassword') as string;

        const user = { username, password };

        signUp(user);
        console.log('ny användare skapad 🎉');
        console.log(userList);
    }
    return (
    <section>
        <p>Skapa en ny användare</p>
        <form onSubmit={handleSignUpSubmit} method="post">
            <label htmlFor="newUserName"></label>
            <input type="text" id="newUserName" name="newUserName" placeholder="Användarnamn"></input>
            <label htmlFor="newUserPassword"></label>
            <input type="password" id="newUserPassword" name="newUserPassword" placeholder="Lösenord"></input>
            <button type="submit">Skapa ny användare</button>
        </form> 
    </section>
    )
}

export default SignUp;