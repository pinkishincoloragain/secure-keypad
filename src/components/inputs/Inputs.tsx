import styled from "@emotion/styled";
import MoneyInput from "./MoneyInput";

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px 10%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  margin-bottom: 10px;
  margin-top: 5px;

  &:focus {
    border: 2px solid black;
  }
`;

export const Output = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  margin-bottom: 10px;
`;

function Inputs() {
    return (
        <InputsContainer>
            <MoneyInput/>
        </InputsContainer>
    )
}

export default Inputs;