import { useNavigate } from 'react-router-dom';
import useSessionStore from "../stores/sessionStore";

function LogOut() {
    const logOut = useSessionStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/');
    };

    return (
        <button type="button" onClick={handleLogOut}>Logga ut</button>
    );
}

export default LogOut;