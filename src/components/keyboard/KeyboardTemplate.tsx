import styled from '@emotion/styled';
import {useEffect, useState} from "react";
import {MASK_CHARACTER, REQ_DIGIT_NUM} from "../../constants/keyboard";
import KeyboardDisplay from "./KeyboardDisplay";
import AlphabetKeyboard from "./AlphabetKeyboard";
import NumericKeyboard from "./NumericKeyboard";

export const KeyboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const KeyboardTemplate = () => {
    const [currentInput, setCurrentInput] = useState('');
    const [isMasked, setIsMasked] = useState(false);
    const [isAlphabetKeyboard, setIsAlphabetKeyboard] = useState(false);

    useEffect(() => {
        if (currentInput.length >= REQ_DIGIT_NUM) {
            setIsAlphabetKeyboard(true);
        }
    }, [setIsAlphabetKeyboard, currentInput]);

    const onClickKeyboardButton = (alphabet: string) => setCurrentInput(currentInput + alphabet)

    const onClickDeleteButton = () => setCurrentInput(currentInput.slice(0, -1));
    const toggleMaskClick = () => setIsMasked(!isMasked);

    return (
        <>
            <KeyboardDisplay
                input={isMasked ? MASK_CHARACTER.repeat(currentInput.length) : currentInput}
                isMasked={isMasked}
                toggleMaskClick={toggleMaskClick}
            />
            <KeyboardWrapper>
                {isAlphabetKeyboard
                    ?
                    <AlphabetKeyboard
                        onClickKeyboardButton={onClickKeyboardButton}
                        onClickDeleteButton={onClickDeleteButton}
                    />
                    :
                    <NumericKeyboard
                        onClickKeyboardButton={onClickKeyboardButton}
                        onClickDeleteButton={onClickDeleteButton}
                    />}
            </KeyboardWrapper>
        </>
    )
}

export default KeyboardTemplate;