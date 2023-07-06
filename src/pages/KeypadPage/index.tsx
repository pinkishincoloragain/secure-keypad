import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { isNonEmptyArray } from '@toss/utils';

import Password from 'components/Password';
import Keypad from 'components/Keypad';
import { KeypadType, PASSWORD_SIZE } from 'constants/keypad';

const KeypadPage = () => {
  const [password, setPassword] = useState<string[]>([]);

  const handleClickDeleteButton = () => {
    const nextPassword = [...password];
    nextPassword.pop();
    setPassword(nextPassword);
  };

  useEffect(() => {
    if (password.length === PASSWORD_SIZE) {
      alert(password.join(''));
      setPassword([]);
    }
  }, [password]);

  return (
    <KeypadPageWrapper>
      <Title>비밀번호를 눌러주세요</Title>
      <Password inputCount={password.length} />
      <Keypad
        css={css`
          margin-top: 5rem;
        `}
        type={
          password.length === PASSWORD_SIZE - 1
            ? KeypadType.alphabet
            : KeypadType.number
        }
        isShowDeleteButton={isNonEmptyArray(password)}
        onClickKey={(key) => setPassword([...password, key])}
        onClickDelete={handleClickDeleteButton}
      />
    </KeypadPageWrapper>
  );
};

export default KeypadPage;

const KeypadPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
