import styled from 'styled-components';

export const Container = styled.header`
  height: 20%;
  padding: 0 24px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .title{
    display: flex;
    justify-content: space-between;
    width: 25%;
  }
  button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
