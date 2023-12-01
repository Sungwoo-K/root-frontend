import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 10px;
  width: 1400px;
  margin-bottom: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  align-items: center;
  padding: 50px 0px 30px 0px;
  .headbar {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    width: 50%;
    top: 20vh;
    background-color: white;
    position: fixed;
    z-index: -99;
    transition: 0.3s;

    .allheader {
      padding: 80px 50px 50px 50px;
      .final-div {
        display: flex;
        width: 95%;
        height: 15%;
        margin: 16px;
        align-items: center;
        margin-left: 0;
      }
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
      .final-button {
        justify-content: center;
        cursor: pointer;
        align-items: center;
        display: flex;
        font-size: 17px;
        line-height: 26px;
        padding: 11px 10px;
        flex: 1 0 0;
        width: 95%;
        background-color: #09addb;
        color: white;
        border: 1px solid #35c5f0;
        border-color: #09addb;
      }
    }
    .header {
      text-align: center;
      width: 100%;
      height: 50px;
      padding-bottom: 5px;
      margin-bottom: 30px;
      font-size: 20px;
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
      width: 90%;
      height: 60px;
      padding: 0 15px;
      background-color: #fff;
      color: #424242;
      border: 1px solid #dbdbdb;
      padding: 9px 15px 9px 15px;
      resize: none;
    }
    .deatil-content {
      margin-top: 30px;
      font-size: medium;
      line-height: 1.5;
      color: #757575;
      width: 95%;
    }

    .total-button {
      height: 90px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 95%;
      flex: 1 1 30;

      .buttonevent {
        width: 33.33%;
        height: 100%;

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
        color: white;
        background-color: #35c5f0;
        font-weight: 700;
        cursor: pointer;
        box-sizing: border-box;
        border: 1.5px solid #dbdbdb;
        text-align: center;
      }
    }
  }
  .headbar.active {
    z-index: 1;
    height: 70%;
    width: 40%;
  }
  .headbar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }
  .headbar-overlay.active {
    opacity: 1;
    visibility: visible;
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
  cursor: pointer;
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
