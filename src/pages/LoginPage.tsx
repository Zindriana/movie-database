import LogoHeader from "../components/LogoComponent";
import LoginForm from "../components/LoginComponent";
import SignUp from "../components/SignUpComponent";

function LoginPage(){
    return (
        <>
            <header>
                <LogoHeader />
            </header>
            <LoginForm />
            <SignUp />
        </>
    )
}

export default LoginPage