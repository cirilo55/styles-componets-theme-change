import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 500px;
  width: 100%;
  background-image: ${({ theme }) => theme.backgroundImg } ;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
