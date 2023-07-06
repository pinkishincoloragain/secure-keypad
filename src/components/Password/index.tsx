import { Fragment } from 'react';
import styled from '@emotion/styled';
import { PASSWORD_SIZE } from 'constants/keypad';

interface PasswordProps {
  inputCount: number;
}

const Password = ({ inputCount }: PasswordProps) => (
  <PasswordWrapper>
    {Array.from({ length: PASSWORD_SIZE }, (_, i) => (
      <Fragment key={i}>
        {i === PASSWORD_SIZE - 1 && <PlusIcon>﹢</PlusIcon>}
        <PasswordCircle isActive={i < inputCount} />
      </Fragment>
    ))}
  </PasswordWrapper>
);

export default Password;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PasswordCircle = styled.span<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? 'black' : 'gray')};
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
`;

const PlusIcon = styled.span`
  font-size: 2rem;
`;
