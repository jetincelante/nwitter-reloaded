import styled from "styled-components";

export const errors = {
    "auth/email-already-in-use": "That email already exists."
    // "Firebase 오류 코드(이메일 존재)" : "유저에게 띄울 오류 메세지"
}

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`;
export const Title = styled.h1`
    font-size: 42px;
`;
export const Form = styled.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;
export const Input = styled.input`
    padding: 10px 20px; // padding: [상하] [좌우];
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
     &[type="submit"]{
     cursor: pointer;
     &:hover{
        opacity: 0.8; // 투명도 
        }
    }
`;

export const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export const Switcher = styled.span`
    margin-top: 20px;
    a {
        color: #1d9bf0;
    }
`;