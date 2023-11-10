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
  .Header {
    font-family: KOTRAHOPE;
    text-decoration: "none";
    font-size: 40px;
    color: black;
    :hover {
      transition: 0.5s;
      color: #dbdbdb;
    }
  }

  .select-sex {
    margin-top: 10px;
    display: flex;
    width: 30.5vh;
    justify-content: center;
    align-items: center;
    height: 5vh;
    cursor: pointer;
    .buttonevent {
      height: 100%;
      width: 100%;
      background-color: white;
      transition: 0.3s;
      border: 1px solid #dbdbdb;
      color: #7d7c7c;
      cursor: pointer;
    }
    .buttonevent1 {
      height: 100%;
      width: 100%;
      transition: 0.3s;
      background-color: skyblue;
      border: 1px solid #dbdbdb;
      font-weight: 700;
      color: black;
      border: none;

      cursor: pointer;
    }
    .buttonevent2 {
      height: 100%;
      width: 100%;
      transition: 0.3s;
      background-color: #ffb6c1;
      border: 1px solid #dbdbdb;
      font-weight: 700;
      color: black;
      border: none;

      cursor: pointer;
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
