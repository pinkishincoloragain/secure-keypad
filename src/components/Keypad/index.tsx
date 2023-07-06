import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import StyleProps from 'types/style';
import { KeypadType } from 'constants/keypad';
import getSuffledNumbers from 'utils/getSuffledNumbers';
import getSuffledAlphabets from 'utils/getSuffledAlphabets';

interface KeypadProps extends StyleProps {
  type?: KeypadType;
  isShowDeleteButton?: boolean;
  onClickKey: (key: string) => void;
  onClickDelete: () => void;
}

const Keypad = ({
  type = KeypadType.number,
  isShowDeleteButton = true,
  onClickKey,
  onClickDelete,
  ...styleProps
}: KeypadProps) => {
  const numbers = useMemo(() => getSuffledNumbers(), []);
  const alphabets = useMemo(() => getSuffledAlphabets(), []);

  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    setKeys(type === KeypadType.number ? numbers : alphabets);
  }, [alphabets, numbers, type]);

  return (
    <KeypadWrapper type={type} {...styleProps}>
      {keys.map((key) => (
        <KeyButton key={key} onClick={() => onClickKey(key.toString())}>
          {key}
        </KeyButton>
      ))}
      {isShowDeleteButton && <KeyButton onClick={onClickDelete}>←</KeyButton>}
    </KeypadWrapper>
  );
};

export default Keypad;

const KeypadWrapper = styled.div<{ type: KeypadType }>`
  display: grid;
  grid-template-columns: ${({ type }) =>
    `repeat(${type === 'number' ? 3 : 7}, 1fr)`};
  width: 100%;
`;

const KeyButton = styled.button`
  cursor: pointer;
  width: 10rem;
  height: 7rem;
  font-size: 3rem;
  color: black;
  background: none;
  border: none;
`;
