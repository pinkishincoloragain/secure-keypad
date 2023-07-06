import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { isNonEmptyArray } from '@toss/utils';

import Password from 'components/Password';
import Keypad from 'components/Keypad';
import { KeypadType, PASSWORD_SIZE } from 'constants/keypad';

const KeypadPage = () => {
  const MY_PASSWORD = '1234A';
  const [password, setPassword] = useState<string[]>([]);
  const [wrongPasswordCount, setWrongPasswordCount] = useState(0);

  const handleClickDeleteButton = () => {
    const nextPassword = [...password];
    nextPassword.pop();
    setPassword(nextPassword);
  };

  useEffect(() => {
    if (password.length !== PASSWORD_SIZE) {
      return;
    }

    if (password.join('') !== MY_PASSWORD) {
      setWrongPasswordCount((count) => count + 1);
      setPassword([]);
      return;
    }

    alert('성공!');
    setWrongPasswordCount(0);
    setPassword([]);
  }, [password]);

  useEffect(() => {
    if (wrongPasswordCount === 5) {
      alert('비밀번호를 변경하세요.');
      setWrongPasswordCount(0);
    }
  }, [wrongPasswordCount]);

  return (
    <KeypadPageWrapper>
      <Title>
        {wrongPasswordCount > 0 ? (
          <>
            <span>비밀번호가 맞지 않아요.</span>
            <span>
              다시 눌러주세요. <strong>{wrongPasswordCount} / 5</strong>
            </span>
          </>
        ) : (
          '비밀번호를 눌러주세요'
        )}
      </Title>
      <Password inputCount={password.length} />
      <Keypad
        type={
          password.length === PASSWORD_SIZE - 1
            ? KeypadType.alphabet
            : KeypadType.number
        }
        isShowDeleteButton={isNonEmptyArray(password)}
        onClickKey={(key) => setPassword([...password, key])}
        onClickDelete={handleClickDeleteButton}
        css={css`
          margin-top: 3rem;
        `}
      />
    </KeypadPageWrapper>
  );
};

export default KeypadPage;

const KeypadPageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
`;

const Title = styled.h1`
  line-height: 1.5;
  font-size: 2rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  strong {
    color: red;
  }
`;
