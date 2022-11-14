import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  heght: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  background-color: red;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>my page</h1>
    </StyledHeader>
  );
}
