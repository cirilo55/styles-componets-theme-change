import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  border-radius: 10px;
  margin-top: 24px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .hover{
    background-color: ${({ theme }) => theme.secondaryBackground};
    width: 30% ;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .dot {
    height: 30px;
    width: 30px;
    border: 1px solid black;
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
  input {
    width: 95% ;

    height: 40px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.secondaryBackground};
    border: none
  }

  button{
    cursor:pointer;
    background-color: ${({ theme }) => theme.secondaryBackground};
    border: 0;
    height: 30% ;
    margin-left: 10px

  }
  button:focus{
    border: 0;
  }
`
