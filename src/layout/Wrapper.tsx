
import { styled } from 'styled-components'

const StyledWrapper = styled.div`
    background-color : #FCFAF9;
    width: 100%;
    color:black;
`;

interface WrapperProps {
  children: React.ReactNode
}
const Wrapper = ({children}:WrapperProps) => {
  return (
    <StyledWrapper>
     <header>
        <>
          <div>
            {/* TODO: ADD ICON */}
          </div>
          <div>

              <img
              width="50"
                src="https://api.dicebear.com/7.x/thumbs/svg?seed=Midnight"
                  alt="avatar" />
          </div>
        </>
     </header>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper