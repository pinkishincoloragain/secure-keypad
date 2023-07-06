import styled from "@emotion/styled";
import {ReactNode} from "react";

export const KeyboardButtonWrapper = styled.button<{ underline: boolean | undefined }>`
  width: 50px;
  height: 50px;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  background-color: transparent;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #0078FF;
  }
`
type KeyboardButtonProps = {
    children: ReactNode,
    underline?: boolean | undefined
    onClick?: () => void
}

const KeyboardButton = ({children, underline, onClick}: KeyboardButtonProps) => {
    return (
        <KeyboardButtonWrapper onClick={onClick} underline={underline}>
            {children}
        </KeyboardButtonWrapper>
    )
}
export default KeyboardButton;