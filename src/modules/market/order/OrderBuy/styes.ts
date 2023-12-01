import styled from "@emotion/styled";
import { Container, BaseBtn } from "@/components/community/Header/styles";

export const BestItemContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;

  width: 100%;
  height: 100%;
  > div {
    width: 100px;
    height: 30px;
    text-align: center;
  }
`;

export const Form = styled.article`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 1540px;
  height: 820px;
  > div {
    display: flex;
    flex-direction: column;
  }
  .orderbutton {
    margin-top: 30px;
    width: 600px;
    height: 54px;
  }
`;

export const Button = styled.button`
  width: 582px;
  height: 54px;
  border: none;
  background-color: #35c5f0;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 1px solid #dbdbdb;
  :hover {
    transition: 0.3s;
    background-color: #009fce;
  }
`;

export const BestItem = styled.div`
  margin: 10px;
  width: 320px;
  height: 384px;
  > img {
    width: 320px;
    height: 300px;
  }
`;

export const Btnbtn = styled(BaseBtn)`
  color: red;
`;

export const Pd = styled.textarea`
  display: flex;
  align-items: flex-start;
`;
export const UseContainer = styled.div`
  margin-top: 50px;
  height: 750px;
  width: 800px;
  border: 1px solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;

  .useProfile {
    margin-top: 100px;
    width: 800px;
    text-align: center;
    align-items: center;
  }
  > div > div > p {
    font-family: "Do Hyeon", sans-serif;
    margin-bottom: 2vw;
    font-size: 2vw;
  }
  .delivery {
    margin-top: 100px;
    width: 800px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    > div:nth-of-type(3) {
      display: flex;
      flex-direction: column;
    }
    .deliveryprofile {
      margin-top: 40px;
      width: 576px;
      height: 54px;
      display: flex;
      flex-direction: row;
      gap: 23px;
      border-radius: 10px;
      .deliveryuser {
        width: 576px;
        height: 54px;
      }
    }
  }
`;

export const UseName = styled.input`
  width: 576px;
  height: 20px;
  margin-bottom: 1vw;
  font-size: large;
  padding: 15px;
`;
export const Usephone = styled.input`
  width: 576px;
  height: 20px;
  padding: 15px;
  font-size: large;
`;

export const Address = styled.input`
  margin-top: 20px;
  margin-bottom: 1vw;
  width: 576px;
  height: 20px;
  padding: 15px;
  font-size: large;
`;
export const DetailedAddress = styled.input`
  width: 576px;
  height: 20px;
  padding: 15px;
  font-size: large;
`;
export const PurchasedContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 600px;
  padding: 0px 15px 0px 15px;
  justify-content: space-between;
  height: 415px;
  border: 1px solid;
  border-radius: 10px;

  align-items: center;

  .productId {
    padding: 5px 0px 5px 10px;
    font-family: SBAggroB;
    font-size: large;
  }
  .imge {
    padding-top: 40px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }
  .payment {
    display: flex;
    flex-direction: column;
    height: 400px;
    padding: 40px 0px 5px 10px;

    .productName {
      margin-top: 40px;
      font-family: "Noto Sans KR", sans-serif;
    }
    .productTotal {
      margin-top: 20px;
      width: 230px;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
    }
    .finalTotal {
      display: flex;
      flex-direction: column;
      margin-top: 40px;

      height: 20px;
      justify-content: space-between;

      > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .sideprice {
        display: flex;
        flex-direction: column;
        > div {
          display: flex;
          justify-content: space-between;
        }
      }
      .totaldiv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 145px;
        > totalprice {
          margin-bottom: 150px;
        }
      }
    }
  }
`;
export const Payment = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 10px;
  gap: 20px;
  border-radius: 15px;
  .bankbook {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  .selectbank {
    display: flex;
    flex-direction: column;
    padding-right: 5px;
    .input {
      width: 100%;
      height: 30px;
    }
    .inputtext {
      height: 30px;
      padding: 5px;
    }
  }
  .paymentbutton {
    display: flex;
    width: 610px;
    height: 60px;
    > button {
      width: 605px;
    }
  }
`;
