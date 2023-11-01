import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: top;
  padding: 20%;
  flex-direction: column;
  background-color: #fafafa;
  height: 100vh;
  padding: 0%;
  .select-sex {
    margin-top: 10px;
    display: flex;
    width: 30.5vh;
    justify-content: center;
    align-items: center;
    height: 5vh;
    .buttonevent {
      height: 100%;
      width: 100%;
      background-color: white;
      border: 1px solid #dbdbdb;
      color: #7d7c7c;
    }
    .buttonevent1 {
      height: 100%;
      width: 100%;
      background-color: #ece6cc;
      border: none;
      color: #7d7c7c;
    }
    .buttonevent2 {
      height: 100%;
      width: 100%;
      background-color: #ece6cc;
      border: none;
      color: #7d7c7c;
    }
  }
`;

export const Input = styled.input`
  width: 30vh;
  height: 45px;

  border: 1px solid #dbdbdb;
`;

export const Inputp = styled.p`
  margin-top: 20px;
`;

export const Inputdiv = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
`;

export const Forminput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;
`;
