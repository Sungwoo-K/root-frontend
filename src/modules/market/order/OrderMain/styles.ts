import styled from '@emotion/styled';

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
        gap: 15vh;
    }
    .imgtotal {
        display: flex;
        flex-direction: column;
        width: 38%;
        height: 100%;
        justify-content: center;
        align-items: flex-start;
    }
    .imgdiv {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        height: 60vh;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #dbdbdb;
        padding: 15px 15px 15px 15px;

        .mainimg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 95%;
            height: 70%;
        }
        .sideimg {
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
        flex-direction: column;
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
        height: 100%;
    }
    .productorder {
        width: 100%;
        height: 10%;
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
            width: 34px;
            height: 50%;

            background-color: white;
            border: 1px solid #ccc;
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

    width: 1300px;
    cursor: pointer;
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
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .product {
        width: 33%;
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
    width: 45%;
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
    padding: 0px 10px 10px 10px;
    flex-direction: row-reverse;
`;
