import styled from "styled-components";

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

const Login = () => {
  return (
    <LoginWrapper>
      <FormWrapper>
          <legend>Log In</legend>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
          <button type="submit">Login</button>
     
      </FormWrapper>
    </LoginWrapper>
  )
}

export default Login