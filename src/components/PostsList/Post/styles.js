import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.secondaryBackground };;
  display: flex;
  padding: 16px;
  width: 100%;

  .completed{
    opacity: 0.5;

  }
  .dot {
    height: 30px;
    width: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: inline-block;
    opacity: 0.5;

  }
  .dotblack {
    height: 30px;
    width: 30px;
    border: 1px solid #ccc;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    opacity: 0.5;
  }
  .delete{
    margin-left:auto;
    font-size:20px;
    width: 3%;

  }

  h2 {
    margin: 0 0 8px;
  }

`;
