import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  margin-top: 10vh;
  align-items: center;
  justify-content: space-around;
  height: 10%;

  .Home,
  .Scrap,
  .Great,
  .Setting {
    width: 10%;
    height: 80%;
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
