import styled from 'styled-components';
import { MessageStatus, UserBase } from '../types';
import Message from './Message';
  
const FormWrapper = styled.form`
  margin: 6rem;
  padding:10rem;
  display: flex;
  flex-direction: column;
  background-color: red;
`;
interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formState: UserBase;
    error: string;
}
const Form = ({handleSubmit, handleChange,formState,error}:FormProps ) => {
  return (
   
      <FormWrapper onSubmit={handleSubmit}>
          <legend>Log In</legend>
            { error && Message({typeMessage: MessageStatus.Error, message: error}) }
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

  )
}

export default Form