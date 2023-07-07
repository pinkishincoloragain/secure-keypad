import {Input, InputContainer, Output} from "./Inputs";
import {ChangeEvent, useState} from "react";

export default function MoneyInput() {
    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.target.value);
    }

    return (
        <InputContainer>
            <h1>Money Input</h1>
            <Input onChange={handleInputChange}/>
            <Output>{inputValue}</Output>
        </InputContainer>
    )
}