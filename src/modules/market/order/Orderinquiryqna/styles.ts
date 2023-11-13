import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Inquerybox = styled.article`
  width: 1260px;

  display: block;
  flex-direction: column;

  margin-top: 30px;

  margin-bottom: 30px;
  .productname {
    padding: 10px;
    font-family: DNFBitBitv2;
    font-size: x-large;
    display: flex;
    justify-content: space-between;
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
      top: 0;
      left: 0;
      color: #35c5f0;
      font-weight: 700;
    }
  }
  .bottomline {
    border-bottom: 1px solid #dbdbdb;
    margin-top: 60px;
  }
  .productanswer {
    margin-top: 30px;
    display: flex;
    padding: 10px;
    font-family: GmarketSansMedium;

    > span {
      top: 0;
      left: 0;
      color: #35c5f0;
      font-weight: 700;
    }
    > p {
    }
  }
  .answercontent {
    font-family: answercontent;
    padding: 5px 0px 0px 33px;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: large;
  padding-left: 5px;
  margin-bottom: 20px;
`;
