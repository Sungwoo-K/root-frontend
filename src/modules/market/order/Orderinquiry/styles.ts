import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 10px;
  width: 1218px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  align-items: center;
  padding: 50px 40px 30px 40px;
  .headbar {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    width: 70%;
    top: 30vh;
    background-color: white;
    position: fixed;
    z-index: -99;
    transition: 0.3s;

    .allheader {
      padding: 40px 40px 40px 40px;
    }
    .header {
      text-align: center;
      width: 100%;
      height: 50px;
      /* padding: 30px 10px 10px 30px; */
      margin-bottom: 30px;
      font-size: 17px;
      font-weight: 700;
      color: #292929;
    }
    .seconde {
      font-size: 15px;
      font-weight: 700;
      color: #292929;
      margin-bottom: 20px;
    }
    .content {
      width: 94%;
      height: 60px;
      padding: 0 15px;
      background-color: #fff;
      color: #424242;
      border: 1px solid #dbdbdb;
      padding: 9px 15px 9px 15px;
      resize: none;
    }

    .total-button {
      height: 90px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      .buttonevent {
        width: 33.33%;
        height: 100%;
        /* color: #fff; */
        color: #292929;
        background-color: white;
        font-weight: 700;
        cursor: pointer;
        box-sizing: border-box;
        border: 1.5px solid #dbdbdb;
        text-align: center;
        .Buttonquiry {
          width: 100%;
          height: 100%;
          color: #292929;
          background-color: #fff;
          font-weight: 700;
          border-color: #35c5f0;
          cursor: pointer;
          box-sizing: border-box;
          border: 1px solid #dbdbdb;
          text-align: center;
        }
      }
      .buttoneventactive {
        width: 33.33%;
        height: 100%;
        /* color: #fff; */
        color: #292929;
        background-color: white;
        font-weight: 700;
        cursor: pointer;
        box-sizing: border-box;
        border: 1.5px solid #dbdbdb;
        text-align: center;
        .Buttonquiry {
          width: 100%;
          height: 100%;
          color: #fff;
          background-color: #35c5f0;
          font-weight: 700;
          border-color: #35c5f0;
          cursor: pointer;
          box-sizing: border-box;
          border: 1px solid #dbdbdb;
          text-align: center;
        }
      }
      /* 
      .first-button {
        display: flex;
        flex: 1 1 30%;
      }
      .second-button {
        height: 50%;
        display: flex;
      } */
    }
  }
  .headbar.active {
    z-index: 1;
  }
  .headerdiv {
    display: flex;
    justify-content: space-between;
    width: 90%;
    .list-title {
      width: 10%;
      height: 30px;
      display: block;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      margin: 10px 0px 25px;
      font-size: 19px;
      justify-content: center;
    }
  }
  .deatildiv {
    width: 90%;
    border-bottom: 3px solid;
  }

  .list-item {
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
  .marker {
    margin-top: 10px;
  }
  .marker::before {
    content: "• ";
  }
  .headbar {
  }
`;

export const Button = styled.div`
  width: 10%;
  height: 30px;
  padding: 6px 20px 6px 20px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #0f5ca8;
  border: 1px solid #346aff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
