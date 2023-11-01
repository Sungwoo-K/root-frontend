import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 200px;
  border: 1px solid white;
  height: 502px;
  width: 100%;
  align-items: center;
  .firstedit {
    display: flex;
    width: 100%;
    align-items: flex-start;
    height: 130px;
    top: 0;
  }
`;

export const Editdiv = styled.div`
  display: flex;
  align-items: flex-start;

  width: 500px;
`;

export const Editusername = styled.div``;

export const Editinput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
`;

export const Select = styled.select`
  width: 50vh;
`;

export const P = styled.p`
  margin-top: 2vh;
  text-align: center;
  margin-bottom: 4vh;
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  border: none;
  background-color: #35c5f0;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Buttondiv = styled.div`
  display: flex;
  width: 70%;

  justify-content: space-between;
  margin-left: 10%;
  align-items: flex-start;
  height: 100%;
  cursor: pointer;
`;

export const Editp = styled.p`
  width: 120px;
  height: 60px;
  margin-top: 15px;
`;

export const Seconddiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
`;
