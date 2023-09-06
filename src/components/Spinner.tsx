import styled from "styled-components";

const SpinnerWrapper = styled.div`
    position: absolute;
    background-color: rgb(0 0 0 / 0.92);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    .spinner{
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #09f;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #09f;
        animation: spin 1s ease infinite;
    }
    /* TODO: Add an animation to close and open */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const Spinner = () => {
  return (
    <SpinnerWrapper>
        <div className="spinner"></div>
    </SpinnerWrapper>
  )
}

export default Spinner