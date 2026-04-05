import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = auth.currentUser; // Firebase에 유저 로그인 확인
    console.log(user);
    if (user === null) {
        return <Navigate to="/login" /> // loglut 상태 -> login 페이지로 보냄
    }
    return children; // login 상태 -> 가려던 곳인 children(Layout의 Home,Profile) 띄워줌 

}