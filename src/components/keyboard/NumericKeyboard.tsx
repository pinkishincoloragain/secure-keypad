import KeyboardButton from "./KeyboardButton";
import {useEffect, useState} from "react";
import {KEYBOARD_DIGITS} from "../../constants/keyboard";
import {shuffle} from "@toss/utils";
import {KeyboardProps} from "./AlphabetKeyboard";

const NumericKeyboard = ({onClickKeyboardButton, onClickDeleteButton}: KeyboardProps) => {
    const [digits, setDigits] = useState<string[]>(KEYBOARD_DIGITS);

    useEffect(() => {
        setDigits(shuffle(KEYBOARD_DIGITS));
    }, [setDigits]);

    return (
        <>
            {digits.map((digit: string) => (
                <KeyboardButton
                    onClick={() => onClickKeyboardButton(digit)}
                    key={digit}
                    underline={true}>
                    {digit}
                </KeyboardButton>
            ))}
            <KeyboardButton onClick={onClickDeleteButton}>
                ⬅
            </KeyboardButton>
        </>
    )
}

export default NumericKeyboard;