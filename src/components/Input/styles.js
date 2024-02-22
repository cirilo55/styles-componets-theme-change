import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.secondaryBackground };
  height: 60px;
  border-radius: 10px;
  margin-top: 24px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  input {
    height: 40px;
    width: 25% ;
    border-radius: 5px;
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
