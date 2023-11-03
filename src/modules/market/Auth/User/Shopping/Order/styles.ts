import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

export const Totalimg = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  justify-content: space-evenly;
  border: 1px solid;
  width: 1800px;
`;

export const Detail = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  height: 350px;
  width: 300px;
`;
