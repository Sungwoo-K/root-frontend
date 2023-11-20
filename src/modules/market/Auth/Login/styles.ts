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
  flex-direction: column;
  background-color: #fafafa;
  height: 100vh;
  padding: 0%;
  width: 100vw;
  top: 50%;
  position: relative;
  > video {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    object-fit: cover;
    z-index: 0;
  }
  > div {
    z-index: 1;
    position: absolute;
    top: 30vh;
    left: 43vw;
  }
`;

export const Headername = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 60px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const Logindiv = styled.div`
  display: flex;
  flex-direction: column;
  .id {
    border-top: 1px solid #dbdbdb;
    border-bottom: none;
    border-right: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
  }
  .pw {
    border-top: none;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
  }
`;

export const Logininput = styled.input`
  width: 300px;
  height: 50px;
  padding: 0px 0px 0px 10px;
  margin-top: 10px;
`;

export const Loginbutton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 298px;
  .Link {
    margin-top: 20px;
    text-decoration: none;
    justify-content: space-between;
    color: white;
    border: none;
  }
`;

export const ExceptionButton = styled.button`
  cursor: pointer;
  border: none;
  width: 80px;
  height: 20px;
  background-color: hsl(0, 50%, 100%);
  font-size: 14px;
  padding-right: 0;
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
  margin-top: 25px;

  :hover {
    transition: 0.3s;
    background-color: #009fce;
  }
`;
