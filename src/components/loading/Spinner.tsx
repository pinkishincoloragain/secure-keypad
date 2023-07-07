import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerComponent = styled.div`
  height: 30px;
  width: 30px;
  border: 2px solid #f8049c;
  border-radius: 100%;
  border-top: none;
  border-right: none;
  margin: 0px auto;
  animation: ${rotation} 1s linear infinite;
`;

function Spinner() {
    return (
        <SpinnerWrapper>
            <SpinnerComponent/>
        </SpinnerWrapper>
    )
}

export default Spinner;