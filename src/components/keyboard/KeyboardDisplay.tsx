import styled from "@emotion/styled";
import {
    PASSWORD_PHRASE,
    PASSWORD_PHRASE_2,
    REQ_ALPHABETS_NUM,
    REQ_DIGIT_NUM,
    UNVEIL_PASSWORD_PHRASE, VEIL_PASSWORD_PHRASE, MASK_CHARACTER
} from "../../constants/keyboard";

export const KeyboardDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;
`

export const PasswordBlanks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 1rem;
`;

export const PasswordPlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-bottom: 4px solid black;
`

export const UnveilButton = styled.button`
  width: fit-content;
  height: 2rem;
  text-decoration: underline;

`

type KeyboardDisplayProps = {
    input: string;
    isMasked: boolean;
    toggleMaskClick: (isUnveiled: boolean) => void;
}

const KeyboardDisplay = ({input, isMasked, toggleMaskClick}: KeyboardDisplayProps) => {
    return (
        <KeyboardDisplayWrapper>
            {PASSWORD_PHRASE}
            <br/>
            {PASSWORD_PHRASE_2}
            <PasswordBlanks>
                {Array.from({length: REQ_DIGIT_NUM}, (_, i) => (
                    <PasswordPlaceholder key={i}>{input[i]}</PasswordPlaceholder>
                ))}
                +
                <PasswordPlaceholder key={4}>{input[4]}</PasswordPlaceholder>
            </PasswordBlanks>
            <UnveilButton onClick={e => {
                e.preventDefault();
                toggleMaskClick(isMasked);
            }}>
                {isMasked ? UNVEIL_PASSWORD_PHRASE : VEIL_PASSWORD_PHRASE}
            </UnveilButton>
        </KeyboardDisplayWrapper>
    )
}

export default KeyboardDisplay;