import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 1400px;
  height: 150px;
  align-items: center;
  padding-left: 120px;
`;

export const Orderlist = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1200px;
  height: 50px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;

  .list {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 50px;

    align-items: center;
  }
  .link {
    text-decoration: none;
    color: #2f3438;
    font-weight: bold;
    font-size: large;
    font-family: KOTRAHOPE;
    transition: background-color 0.5s ease;
    &.active {
      border: 0.5px solid #f9f5f6;
      border-radius: 20px;
      background-color: #f9f5f6;
    }
  }
`;
