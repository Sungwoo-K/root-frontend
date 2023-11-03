import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  border: 1px solid;
  align-items: center;
`;

export const Orderlist = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  border: 1px solid;
  width: 900px;
  height: 50px;

  .list {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 50px;
    border: 1px solid;
    border-radius: 13px;
    align-items: center;
  }
`;
