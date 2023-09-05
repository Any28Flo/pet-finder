import styled from 'styled-components';
import { MessageStatus } from '../types';


interface MessageProps {
  typeMessage:MessageStatus;
    message: string;
}
const MessageWrapper = styled.div`
   border: 1px solid black;
  margin: 10px;

  &.success {
    background-color: green;
    color: white;
  }

  &.error {
    background-color: red;
    color: white;
  }

`;
const Message = ({typeMessage, message}:MessageProps) => {
 
  return (
    <MessageWrapper className={typeMessage == MessageStatus.Success ? "success" : "error"}>{message}</MessageWrapper>
  )
}

export default Message