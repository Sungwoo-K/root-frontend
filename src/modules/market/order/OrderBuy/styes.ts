import styled from '@emotion/styled';
import { Container, BaseBtn } from '@/components/community/Header/styles';

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
    border: 1px solid;
    align-items: flex-start;
    justify-content: space-around;
    width: 80%;
    height: 90%;
    > div {
        display: flex;
        flex-direction: column;
    }
`;

export const BestItem = styled.div`
    flex: 1;
    border: 2px solid gold;
    margin: 10px;
    width: 11vw;
    height: 20vw;
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
    width: 800px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    gap: 2vw;
    .useProfile {
        margin-top: 30px;
        width: 800px;
        text-align: center;
        align-items: center;
    }
    > div > div > p {
        font-family: 'Do Hyeon', sans-serif;
        margin-bottom: 2vw;
        font-size: 2vw;
    }
    .delivery {
        margin-top: 30px;
        width: 800px;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        > div:nth-child(3) {
            display: flex;
            flex-direction: column;
        }
        .deliveryprofile {
            width: 296px;
            display: flex;
            flex-direction: row;
        }
    }
`;

export const UseName = styled.input`
    width: 15vw;
    height: 2.5vw;
    margin-bottom: 1vw;
    border-radius: 10px;
`;
export const Usephone = styled.input`
    width: 15vw;
    height: 2.5vw;
    border-radius: 10px;
`;

export const Address = styled.input`
    margin-bottom: 1vw;
    width: 15vw;
    height: 2.5vw;
    border-radius: 10px;
`;
export const DetailedAddress = styled.input`
    width: 15vw;
    height: 2.5vw;
    border-radius: 10px;
`;
export const PurchasedContainer = styled.div`
    display: flex;
    margin-top: 50px;
    width: 500px;
    height: 415px;
    border: 1px solid;

    align-items: center;

    .productId {
        padding: 10px 0px 5px 10px;
    }
    .imge {
        height: 400px;
        display: flex;
        flex-direction: column;
    }
    .payment {
        display: flex;
        flex-direction: column;
        height: 400px;
        padding: 10px 0px 5px 10px;

        .productName {
            margin-top: 40px;
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
            margin-top: 50px;
            gap: 20px;
            height: 240px;
            justify-content: space-between;

            > div {
                display: flex;
                flex-direction: column;
                gap: 30px;
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
            /* width: 450px; */
            height: 30px;
        }
    }
    .paymentbutton {
        display: flex;
        width: 475px;
        height: 60px;
        > button {
            width: 475px;
        }
    }
`;
