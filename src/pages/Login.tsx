import React, { useState } from "react";
import styled from "styled-components";
import { UserBase } from "../types";

const LoginWrapper = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    
    align-items: center;
    justify-content: center;
`;
const FormWrapper = styled.form`
  margin: 6rem;
  padding:10rem;
  display: flex;
  flex-direction: column;
  background-color: red;
`;
const initState={
  name: "",
  email: ""
}

const Login = () => {

  const [formState, setFormState] = useState<UserBase>(initState);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(initState);
    console.log(formState)
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
      <FormWrapper onSubmit={handleSubmit}>
          <legend>Log In</legend>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                value={formState.name}
                onChange={handleChange}
                 />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
              
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                 />
            </div>
          <button type="submit">Login</button>
      </FormWrapper>
    </LoginWrapper>
  )
}

export default Login