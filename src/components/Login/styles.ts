import styled from "@emotion/styled";

export const LoginHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20%;
  flex-direction: column;
  gap: 30px;
  background-color: #fafafa;
`;

export const Logindiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logininput = styled.input`
  width: 300px;
  height: 50px;
`;

export const Loginbutton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExceptionButton = styled.button`
  cursor: pointer;
  border: none;
  width: 80px;
  height: 40px;
  background-color: #fafafa;
  font-size: 15px;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 310px;
  height: 45px;
  border: none;
  background-color: #35c5f0;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
