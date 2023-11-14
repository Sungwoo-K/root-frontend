import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .imgtotal {
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 750px;
    margin-top: 100px;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .sideimg {
    border: 1px solid;
    display: flex;
    width: 95%;
    height: 20%;

    .smalldiv {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 100%;

      margin-top: 2%;
      margin-right: 3%;
    }
    .smallimg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Contentdiv = styled.div`
  width: 1920px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15vh;
  border-radius: 10px;
`;

export const Mainimg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 630px;
  height: 480px;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  object-fit: cover;
`;

export const Imgbox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  height: 510px;
  justify-content: flex-start;

  padding: 15px 15px 15px 15px;
  gap: 10px;
  .sidediv {
    display: flex;
    width: 300px;
    .sideimg {
      margin-right: 10px;
      width: 158px;
      height: 120px;
      > img {
        cursor: pointer;
      }
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 457px;
  height: 600px;
  > h1 {
    cursor: pointer;
    margin-left: 5px;
    font-family: yg-jalnan;
    font-size: medium;
    > button {
      border: none;
      background-color: white;
      font-family: yg-jalnan;
      font-size: medium;
    }
  }

  .star {
    color: gold;
    font-size: 24px;
  }

  .headerdiv {
    display: flex;
    flex-direction: column;
  }
  .headerdiv {
    width: 100%;
    height: 15%;
  }

  .title {
    padding: 10px;
    font-family: SBAggroB;

    font-size: 18px;
  }
  .pricediv {
    padding: 10px;
    width: 50vh;
    height: 100%;
  }
  .option {
    width: 476px;
    height: 402px;
    padding-top: 30px;
    position: relative;
    font-family: Jeongnimsaji-R;
  }
  .productorder {
    width: 100%;
    height: 10%;
  }
  .buttondiv {
    border: 1px solid;
    display: flex;
    width: 94px;
    height: 45px;
    > input {
      width: 60px;
      height: 26px;
      border: none;
      padding: 10px 0px 8px 0px;
      text-align: center;
      font-size: 18px;
    }
  }

  .productorder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clickmenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-items: first baseline;
    width: 100%;
  }
`;
export const EventButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  .countbutton {
    display: flex;
    cursor: pointer;
    border: none;
    width: 34px;
    height: 50%;

    background-color: white;
    border: 1px solid #ccc;
  }
`;
export const Iconbutton = styled.button`
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 30px;
`;

export const Addinformation = styled.div`
  display: flex;
  border-top: 2px solid #555;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;

  width: 1400px;
  cursor: pointer;
  .product.active {
    background: #dbdbdb;
    color: #555;
  }
  .productoption {
    width: 100%;

    height: 50px;
  }
  .navigation {
    width: 100%;
    height: 100%;
  }
  .proudct-list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .product {
    width: 470px;
    height: 100%;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555;
    border-right: 1px solid #ccc;
  }
`;

export const Button = styled.button`
  gap: 30px;
  width: 180px;
  height: 47px;
  border: none;
  background-color: #35c5f0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: 1px solid #346aff;
`;

export const Price = styled.div`
  display: flex;
  font-size: x-large;
  padding: 10px 0px 10px 10px;
  flex-direction: row-reverse;
`;

export const Selectbox = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 90%;
  height: 50px;
  padding: 0.8em 0.5em;
  border: 1px solid #999;
  border-radius: 0px;
  background: url(https://t1.daumcdn.net/cfile/tistory/99761B495C84AA8716?original)
    no-repeat 95% 50%;
`;
