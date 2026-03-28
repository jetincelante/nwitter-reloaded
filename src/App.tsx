import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const router = createBrowserRouter([
  {
    // Layout -> login 사용자만 들어감
    // layout.tsx의 <h2>layout</h2> -> navigaion바로 바꿀것 
    // why? home, profile페이지에 렌더링 하려고 (login,create-account에는 안씀)
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ]
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


function App() {
  return (
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
  );
}

export default App;
