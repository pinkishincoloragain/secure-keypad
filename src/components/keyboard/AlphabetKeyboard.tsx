import KeyboardButton from "./KeyboardButton";
import {useEffect, useState} from "react";
import {KEYBOARD_ALPHABETS,} from "../../constants/keyboard";
import {shuffle} from "@toss/utils";

export type KeyboardProps = {
    onClickKeyboardButton: (character: string) => void,
    onClickDeleteButton: () => void,
}

const AlphabetKeyboard = ({onClickKeyboardButton, onClickDeleteButton}: KeyboardProps) => {
    const [alphabets, setAlphabets] = useState<string[]>(KEYBOARD_ALPHABETS);

    useEffect(() => {
        setAlphabets(shuffle(KEYBOARD_ALPHABETS));
    }, [setAlphabets]);

    return (
        <>
            {alphabets.map((alphabet: string) => (
                <KeyboardButton onClick={() => onClickKeyboardButton(alphabet)} key={alphabet} underline={true}>
                    {alphabet}
                </KeyboardButton>
            ))}
            <KeyboardButton onClick={onClickDeleteButton}>
                ⬅
            </KeyboardButton>
        </>
    )
}

export default AlphabetKeyboard;