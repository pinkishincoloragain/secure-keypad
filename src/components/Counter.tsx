import {useState} from "react";
import styled from "@emotion/styled";

type CounterProps = {
    initialCount: number;
}

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;


const Counter = ({initialCount}: CounterProps) => {
    const [count, setCount] = useState<number>(initialCount);
    return (
        <CounterWrapper>
            <div>{count}</div>
            <Button type="button" onClick={() => setCount(count + 1)}>+</Button>
        </CounterWrapper>
    );
};

export default Counter;
