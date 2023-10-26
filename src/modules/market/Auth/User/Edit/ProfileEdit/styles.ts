import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  border: 1px solid white;
  height: 1000px;
  .firstedit {
    display: flex;
    width: 500px;
    justify-content: left;
    align-items: flex-end;
    height: 170px;
  }
`;

export const Editdiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 4vh;
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
  margin-top: 25px;
`;

export const Buttondiv = styled.div`
  display: flex;
  width: 500px;
  margin-top: 5vh;
  justify-content: space-between;

  cursor: pointer;
`;

export const Editp = styled.p`
  width: 120px;
  height: 60px;
  margin-top: 15px;
`;
