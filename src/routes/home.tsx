import { auth } from "../firebase";

export default function Home() {
    const logOut = () => {
        auth.signOut(); // Firebase 로그아웃 명령
    }
    return (
        <h1>
            <button onClick={logOut}>Log Out</button>
        </h1>
    );
}