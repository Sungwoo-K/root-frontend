import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1420px;
  margin-left: 200px;
  padding-left: 80px;
  .review {
    position: fixed;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    width: 50%;
    top: 20vh;
    background-color: white;
    position: fixed;
    z-index: -99;
    transition: 0.3s;

    .closebutton {
      cursor: pointer;
    }
  }
  .review-overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    position: fixed;
  }
  .review-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .review.active {
    border: 1px solid;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    top: 30px;
    width: 800px;
    height: 900px;
    z-index: 10;
    margin-left: 300px;
    /* position: absolute; */
    background-color: white;
    overflow-y: hidden;
    .closediv {
      display: flex;
      align-items: end;
      margin-bottom: 15px;
      cursor: "pointer";
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
    }

    .reviewname {
      margin-top: 40px;
      font-size: x-large;
      padding: 10px;
      font-family: yg-jalnan;
    }
    .content {
      width: 700px;
      padding: 30px;
      align-items: center;
      display: flex;
      flex-direction: row;
      > div {
        padding-left: 20px;
        font-family: KOTRAHOPE;
        font: x-large;
        p {
          font: large;
        }
      }
    }
    .selectreview {
      display: flex;
      width: 700px;
      height: 80px;
      padding: 30px;
      align-items: center;
      .warning_msg {
        width: 700px;
        height: 80px;
        padding: 15px;
        > select {
          width: 300px;
          height: auto;
          font-size: large;
          color: #35c5f0;
        }
        > p {
          padding: 15px 0px 15px 0px;
          font-size: x-large;
          font-family: KOTRAHOPE;
        }
        > select > option {
          background: white;
          gap: 30px;
          font-size: medium;
          color: #35c5f0;
          border: 0.5px solid #dbdbdb;
          cursor: pointer;
        }
      }
    }
    .reviewall {
      width: 700px;
      padding: 30px 30px 10px 30px;
      display: flex;
      flex-direction: column;

      .reviewcontent {
        padding-top: 0px;
        padding: 10px;
        > p {
          font-family: KOTRAHOPE;
          font-size: x-large;
        }
      }
      .reviewtext {
        padding: 10px;
        padding-bottom: 0px;
        width: 700px;
        > textarea {
          width: 670px;
          height: 250px;
          resize: none;
          font-size: large;
          padding: 0px 10px 0px 10px;
        }
      }
    }
    .review-ok {
      width: 700px;
      padding: 10px;
      margin: 30px 0px 0px 20px;
      padding-top: 0px;
      > button {
        width: 695px;
        height: 45px;
        font-size: large;
        background-color: #35c5f0;
        font-weight: bold;
        color: white;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid #35c5f0;
      }
    }
  }
  > p {
    font-family: "EASTARJET-Medium";
    font-size: large;
    margin-left: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    /* margin-left: 10px; */
    > input {
      width: 97%;
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
  border-bottom: 1px solid #35c5f0;

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
  text-decoration: none;
  color: black;

  width: 80%;
  padding: 10px 0px 10px 10px;
  .brandname,
  .productname,
  .reviewcount {
    margin-bottom: 12px;
    text-decoration: none;
    color: black;
    font-family: Jeongnimsaji-R;
  }
  .Orderday {
    margin-top: 15px;
    font-family: Jeongnimsaji-R;
  }
`;

export const ProductBrand = styled.div``;
export const ReviewCount = styled.div``;
