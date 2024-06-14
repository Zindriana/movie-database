import LogoHeader from "../components/LogoComponent";
import LoginForm from "../components/LoginComponent";
import SignUp from "../components/SignUpComponent";
import "../styles/homePageStyle.css";

function LoginPage(){
    return (
        <section className="bodyContainer">
            <header>
                <LogoHeader />
            </header>
            <LoginForm />
            <SignUp />
        </section>
    )
}

export default LoginPage