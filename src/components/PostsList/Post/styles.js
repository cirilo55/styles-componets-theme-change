import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.postBackground };;
  display: flex;
  padding: 16px;
  border-radius: 10px;
  width: 100%;

  .complete{
    width: 5%;
  }
  .dot {
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  .dotblack {
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
  }
  .delete{
    margin-left:auto;
    font-size:20px;
    width: 3%;

  }

  h2 {
    margin: 0 0 8px;
  }


  & + article {
    margin-top: 8px;
  }
`;
