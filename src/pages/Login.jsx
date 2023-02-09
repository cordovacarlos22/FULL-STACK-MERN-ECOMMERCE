import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color: gray;
  display:flex;
  align-items:center;
  justify-content:center;
  
`;

const Wrapper = styled.div`
 width: 25%;
 padding: 20px;
 background-color:white;

`;

const Title = styled.h1`
   font-size:24px;
   font-weight:300px;

`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
`;

const Input = styled.input`
  flex-1;
  min-width:40%;
  margin  10px 0px; 
  padding:10px;
`;



const Button = styled.button`
   width:40%;
   border:none;
   padding: 15px 20px; 
   background-color:teal;
   color:white;
   cursor: pointer;
   margin-bottom:10px;
`;

const Links =  styled.a`
 margin: 5px 0px;
 font-size:12px;
 text-decoration: underline;
 cursor:pointer;

 &:hover{
  color:teal;
 }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="User Name"></Input>
          <Input placeholder="Password"></Input>
          <Button>
            Login
          </Button>
          <Links>Do not Remember Your Password?</Links>
          <Links>Create A New Account</Links>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
