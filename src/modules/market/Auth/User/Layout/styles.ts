import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  margin-top: 3vh;
  align-items: center;

  height: 5%;
  justify-content: space-around;
  /* position: fixed; */
  width: 100%;

  .Home,
  .Scrap,
  .Great,
  .Setting {
    width: 15%;
    height: 70%;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    box-shadow: 5px 2px 2px 5px #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
