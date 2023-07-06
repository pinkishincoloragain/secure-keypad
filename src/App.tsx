import normalize from 'emotion-normalize';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import KeypadPage from 'pages/KeypadPage';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
          }
        `}
      />
      <AppWrapper>
        <KeypadPage />
      </AppWrapper>
    </>
  );
}
