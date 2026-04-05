import { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`;
const Title = styled.h1`
    font-size: 42px;
`;
const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;
const Input = styled.input`
    padding: 10px 20px; // padding: [상하] [좌우];
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
     &[type="submit"]{
     cursor: pointer;
     &:hover{
        opacity: 0.8;   
        }
    }
`;

const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;
export default function CreateAccount(){
    const [isLoading,setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const [현재값, 값 바꾸는 함수] : 사용자의 입력값 저장할 메모리 공간 생성 (임시 저장 메모장)
    // useState : 데이터 변수 생성 -> 입력값 기록
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        // onChange 함수 종류: Event Handler
        // 타입(e) : Event의 약자, 사용자가 키보드 쳤다는 '사건 보고서'
        // React.ChangeEvent(타입) : 내용 바꼈을 때 발생하는 이벤트 객체
        // <HTMLInputElement> : 이벤트가 <input>태그에서 발생함
        const { target: {name,value} } = e; 
        // 사용자가 키보드 누를 때마다 실행됨
        // e의'어떤 칸(target.name)'에 '어떤 값(target.value)'이 들어왔는지 확인 후 해당 useState의 변경 함수 호출
        if(name === "name"){
            setName(value)
        } else if(name ==="email"){
            setEmail(value);
        }
        else if(name === "password"){
            setPassword(value);
        }
        // e.target에서 추출한 정보를 set___(value)를 통해 useState 메모리에 저장
        // -> 밑의 <Input/>에 name 넣은 이유 : input 변경 시, 어떤 input인지 확인 가능
    };
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        // onSubmit 함수 종류 : Event Handler
        // React.FormEvent : 폼 제출 시 발생하는 이벤트 객체
        // <HTMLFormElement>: 이 이벤트가 <form> 태그에서 발생함
        e.preventDefault();
        // 브라우저 기본 동작(새로고침) 중단시키는 메소드
        // 가입 누르면 실행 -> 새로고침 없이 자바스크립트(console.log)가 데이터 처리하도록
        try {
            // create an account
            // set the name of user
            // redirect to the home page

        } catch(e){
            // setError
        } finally {
            setLoading(false);
        }        
        console.log(name, email, password);
    };
    return (
    <Wrapper>
        <Title>Log into ✖️</Title>
        {/* HTML={함수명} */}
        <Form onSubmit ={onSubmit}>
        {/* '이 박스에서 엔터 or 버튼 누르면 onSubmit 함수 실행하기' 연결*/}
            <Input
            onChange = {onChange} // 이벤트 속성(센서) = {함수}(일꾼) -> 입력값 바뀔 때마다 onChange 실행
            name ="name" 
            value={name} 
            placeholder= "Name" 
            type="text" 
            required
            />
            <Input
            onChange = {onChange} 
            name ="email" 
            value={email} 
            placeholder="Email" 
            type="email" 
            required
            />
            <Input
            onChange = {onChange} 
            value={password}
            name="password"
            placeholder="Password"
            type="password" 
            required
            />
            <Input 
            type="submit" 
            value={isLoading ? "Loading..." : "Create Account"} // isLoading -> "Loading..." 아니면 "Create Account" 보여주기
            />
        </Form>
        {error !== "" ? <Error>{error}</Error>: null}
    </Wrapper>
    );
}