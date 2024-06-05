import LogOut from "../components/LogoutComponent";
import LoginPage from "./LoginPage";
import useSessionStore from "../stores/sessionStore";

function HomePage(){

    const userOnline = useSessionStore((state) => state.loggedInUser)

    if(userOnline){
        return (
            <LogOut />
            
        )
    } else {
        return (
            <LoginPage />
        )
    }
    
}

export default HomePage