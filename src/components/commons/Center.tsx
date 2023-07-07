import styled from "@emotion/styled";

type CenterProps = {
    flexRow?: boolean,
    flexCol?: boolean
}

const Center = styled.div<CenterProps>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.flexRow ? "row" : props.flexCol ? "column" : "row"};
`;

export default Center;