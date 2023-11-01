import styled from '@emotion/styled';

export const Container = styled.div`
    /* border: 3px solid; */
    display: flex;
    flex-direction: column;
    width: 63%;
    height: 100%;

    align-items: flex-start;
    margin-left: 5%;

    .header {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 20%;
        position: relative;
        width: 100%;
    }
    .headername {
        display: flex;
        width: 30%;
        font-size: xx-large;
        box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
        border: 1px solid;
        justify-content: center;
        background-color: #fff;
        border-radius: 15px;
        color: black;
        height: 90%;
        align-items: center;
    }
`;

export const Followdiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
    border-radius: 15px;
    .img {
        display: flex;
        align-items: center;

        height: 100%;
        .detail {
            position: relative;
            width: 33%;
            align-items: center;
            display: inline-block;
            justify-content: center;
        }
    }
`;

export const Scrapdiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    height: 60%;
    border-radius: 15px;
`;
