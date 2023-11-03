import styled from "@emotion/styled";

export const Container = styled.div`
  /* border: 3px solid; */
  display: flex;
  flex-direction: column;
  width: 63%;
  height: 100%;

  align-items: flex-start;
  margin-left: 4%;

  .header {
    display: flex;
    margin-left: 4vw;
    align-items: flex-start;
    height: 25%;
    position: relative;
    width: 100%;
  }
  .headername {
    display: flex;
    width: 15%;
    font-size: x-large;
    box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, 0.2);
    border: 1px solid;
    justify-content: center;
    background-color: #fff;
    border-radius: 15px;
    color: black;
    height: 90%;
    align-items: center;
  }
`;

export const Followdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  width: 100%;
  border-radius: 15px;
`;

export const Totalimg = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  align-content: center;
  margin-top: 1.5vw;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  flex-direction: column;
  width: 20%;
  height: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .imgname {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 10vw;
    padding-top: 10px;
  }
  .brandname {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 8px 0px 0px 2vw;
  }
`;

export const Scrapdiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  height: 60%;
  border-radius: 15px;
`;
