import normalize from 'emotion-normalize';
import styled from "@emotion/styled";
import {Global, css, useTheme, ThemeProvider} from '@emotion/react';
import KeyboardTemplate from "./components/keyboard/KeyboardTemplate";


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function App() {
    const theme = useTheme();
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
                <KeyboardTemplate/>
            </AppWrapper>
        </>
    );
}
