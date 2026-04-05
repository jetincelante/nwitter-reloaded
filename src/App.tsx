import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route";

const router = createBrowserRouter([
  {
    // Layout -> login 사용자만 들어감
    // layout.tsx의 <h2>layout</h2> -> navigaion바로 바꿀것 
    // why? home, profile페이지에 렌더링 하려고 (login,create-account에는 안씀)
    path: "/",
    element: (<ProtectedRoute>
      {" "}
      <Layout />
    </ProtectedRoute>
    ), // Layout이 Home, Profile을 감싸기 때문에 Home/Profile에 따로 <ProtectedRaoute>안해도 적용됨
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  // login, creat-account가 Layout에 안들어가게 
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }

]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body{
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

// App 초기화
function App() {
  // firebase가 유저 체크하는 동안 띄울 로딩화면
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady(); // Firebase 인증 상태 확인 대기
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      {/* isLoading true -> <LoadingScreen /> 실행, false -> <RouterProvider /> */}
    </Wrapper>
  );
}

export default App;
