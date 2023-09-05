import React, { useState } from "react";
import styled from "styled-components";
import { MessageStatus, UserBase } from "../types";
import Message from "../components/Message";
import Form from '../components/Form';

const LoginWrapper = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    
    align-items: center;
    justify-content: center;
`;

const initState={
  name: "",
  email: ""
}

const Login = () => {

  const [formState, setFormState] = useState<UserBase>(initState);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if(formState.name === "" || formState.email === ""){
      setError("Please fill out all fields");
      return;
    }
    setFormState(initState);
   
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <LoginWrapper>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formState={formState}
        error={error}
       />
    </LoginWrapper>
  )
}

export default Login