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
 width: 40%;
 padding: 20px;
 background-color:white;

`;

const Title = styled.h1`
   font-size:24px;
   font-weight:300px;

`;

const Form = styled.form`
  display:flex;
  flex-wrap:wrap;
`;

const Input = styled.input`
  flex-1;
  min-width:40%;
  margin 20px 10px 0px 0px; 
  padding:10px;
`;

const Agreement = styled.span`
 font-size:12px;
 margin: 20px 0px;
`;

const Button = styled.button`
   width:40%;
   border:none;
   padding: 15px 20px; 
   background-color:teal;
   color:white;
   cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Acount</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="Last name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="User Name"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Agreement>
            By Creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button>
            Create
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
