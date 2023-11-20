import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2000px;
`;

export const Buttondiv = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;

  > button {
    cursor: pointer;
    background-color: white;
    border: none;
    width: 300px;
    height: 50px;

    &:disabled {
      display: none;
    }
  }
`;

export const Inquerybox = styled.article`
  width: 1400px;

  margin-left: 200px;
  display: block;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid;
  margin-bottom: 90px;
  .productname {
    padding: 10px;
    font-family: DNFBitBitv2;
    font-size: x-large;
    display: flex;
    justify-content: space-between;
    > div > a > button {
      background-color: white;
      font-weight: bold;
      color: #35c5f0;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid #35c5f0;
      height: 30px;
    }
  }
  .imagename {
    padding: 10px;
    border-radius: 15px;
  }
  .productquestion {
    display: flex;
    padding: 10px;
    font-family: GmarketSansMedium;
    > span {
      /* position: absolute; */
      top: 0;
      left: 0;
      color: #35c5f0;
      font-weight: 700;
    }
    > p {
    }
  }
  .productanswer {
    display: flex;
    padding: 10px;
    flex-direction: row;
    font-family: GmarketSansMedium;

    > span {
      top: 0;
      left: 0;
      color: #35c5f0;
      font-weight: 700;

      > p {
        width: 700px;
      }
    }
  }
  .answercontent {
    padding: 5px 0px 0px 33px;
  }
  .imgname {
    width: 50px;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: large;
  padding-left: 5px;
  margin-bottom: 20px;
`;

export const Inqeurycontent = styled.div`
  display: flex;
  .inqueryqna {
    display: flex;
    flex-direction: column;
  }
`;
