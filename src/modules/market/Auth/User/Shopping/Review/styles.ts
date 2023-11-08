import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1420px;
  margin-left: 200px;
  > p {
    font-family: "EASTARJET-Medium";
    font-size: large;
    margin-left: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    margin-left: 10px;
    > input {
      width: 88%;
      height: 34px;
      padding: 0 15px 0px 15px;
      border: 1px solid #dbdbdb;
    }
    > button {
      width: 8%;
      height: 37px;
      margin-right: 10px;
      border: none;
      background-color: #35c5f0;
      font-weight: bold;
      color: white;
      cursor: pointer;
      border-radius: 4px;
    }
  }
`;

export const ReviewTable = styled.article`
  margin-top: 50px;
  display: flex;
  margin-bottom: 90px;

  .detailimg {
    border-radius: 15px;
    padding: 10px;
    width: 130px;
    height: 100px;
  }
`;

export const Reviewbutton = styled.div`
  display: flex;
  margin-right: 10px;
  width: 8%;
  flex-direction: column;
  > button {
    width: 100%;
    height: 37px;
    cursor: pointer;
    border: none;
    background-color: white;
    font-weight: bold;
    border: 1px solid #35c5f0;
    color: #35c5f0;
    border-radius: 4px;
    gap: 10px;
  }
`;

export const ReviewPage = styled.a`
  display: flex;
  flex-direction: column;

  width: 80%;
  padding: 10px 0px 10px 10px;
  .brandname,
  .productname,
  .reviewcount {
    margin-bottom: 12px;
  }
`;

export const ProductBrand = styled.div``;
export const ReviewCount = styled.div``;
