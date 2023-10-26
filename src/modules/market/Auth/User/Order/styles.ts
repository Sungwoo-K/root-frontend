import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .contentdiv {
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    gap: 15vh;
  }
  .imgdiv {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 48vh;
    height: 600px;
    justify-content: flex-start;
    .mainimg {
      width: 400px;
      height: 400px;
    }
    .sideimg {
      display: flex;

      height: 20px;
      .smallimg {
        width: 56px;
        height: 56px;
        margin: 26px 26px 26px 26px;
      }
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 48vh;
  height: 600px;

  .headerdiv {
    display: flex;
  }
  .headerdiv {
    width: 100%;
    height: 15%;
  }

  .title {
    padding: 10px;

    font-size: 18px;
  }
  .pricediv {
    padding: 10px;
    width: 50vh;
    height: 33%;
  }
  .productorder {
    padding: 10px;
    height: 33%;
  }
  .buttondiv {
    border: 1px solid;
    display: flex;
    width: 99px;
    height: 45px;
  }
  .button {
    display: flex;
    flex-direction: column;
    width: 50%;
    .countbutton {
      display: flex;
      cursor: pointer;
      border: none;
      width: 35px;
      height: 50%;
      margin-left: 0px;
      padding-right: 0px;
    }
  }
  .productorder {
    display: flex;
  }
  .clickmenu {
    display: flex;
    justify-content: space-around;
    align-items: first baseline;
    width: 100%;
  }
`;

export const Iconbutton = styled.button`
  background-color: white;
  border: none;
  height: 10px;
  width: 30px;
`;

export const Addinformation = styled.div`
  display: flex;
  border: 1px solid;
  width: 1300px;
  .productoption {
    width: 100%;
  }
  .navigation {
    width: 100%;
  }
  .proudct-list {
    display: flex;
    width: 100%;
  }
  .product {
    width: 33%;
    text-align: center;
  }
`;

export const Button = styled.button`
  gap: 30px;
  width: 47%;
  height: 47px;
  border: none;
  background-color: #35c5f0;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 1px solid #dbdbdb;
`;
