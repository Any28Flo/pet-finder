import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Form from '../components/Form';

import styled from "styled-components";

import { UserBase } from "../types";
import Spinner from "../components/Spinner";
import { useAppContext } from "../context";
import { login } from "../db/fetchRewardMethods";




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
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if(formState.name === "" || formState.email === ""){
      setError("Please fill out all fields");
      return;
    }
    setIsLoading(true)
    try {
      const response = await login(formState);
      
      if(response){
        setIsLoading(false)
        setFormState(initState);
        dispatch({
          type: "login",
          payload: {user:formState}
        })
        navigate("/search");
      }
    } catch (error){
      setIsLoading(false)
      setError( error);
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  if(isLoading) return <Spinner />
  
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

