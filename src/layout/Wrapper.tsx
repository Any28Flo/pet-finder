import {  Outlet } from 'react-router-dom';

import { styled } from 'styled-components'
import Header from './Header';

const StyledWrapper = styled.div`
    background-color : #FCFAF9;
    width: 100%;
    height: 100vh;
`;

type WrapperProps = {
  children: React.ReactNode
}
const Wrapper = () => {
  return (
    <StyledWrapper>
     <header>
        <>
          <div>
            {/* TODO: ADD ICON */}
          </div>
          <div>

              <img
                src="https://api.dicebear.com/7.x/thumbs/svg?seed=Midnight"
                  alt="avatar" />
          </div>
          

        </>
     </header>
      <Outlet />
    </StyledWrapper>
  )
}

export default Wrapper