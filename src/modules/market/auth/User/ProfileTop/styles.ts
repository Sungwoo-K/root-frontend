import styled from "@emotion/styled";

export const Container = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: flex-start;

  .header {
    display: flex;
    margin-left: 40px;
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
  height: 150px;
  width: 1093px;
  border-radius: 15px;
`;

export const Totalimg = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150px;
  align-content: center;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #dbdbdb;
  flex-direction: column;
  width: 1080px;
  height: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  .name {
    text-align: center;
    font-family: SBAggroB;
    font-size: xx-large;
  }
  .Totaldiv {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 1050px;
    padding: 20px;
    height: 150px;
    > div {
      height: 150px;
    }
    .totalcount {
      text-align: center;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 10px;
      .count {
        font-family: KOTRAHOPE;
        font-size: x-large;
      }
    }
  }

  .imgname {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 190px;
  }
  .brandname {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0px 10px 0px;
  }
`;

export const Scrapdiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  height: 60%;
  border-radius: 15px;
`;
