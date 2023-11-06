import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const Button = styled.button`
    background-color: white;
    font-weight: bold;
    color: #35c5f0;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #35c5f0;
    height: 30px;
`;

export const Reviewbox = styled.article`
    width: 1400px;
    height: 100vw;
    margin-left: 200px;
    display: block;
    flex-direction: column;
    margin-top: 30px;
    user-select: none;
    margin-bottom: 90px;

    .productname {
        padding: 10px;
        font-family: DNFBitBitv2;
        font-size: x-large;
        display: flex;
        justify-content: space-between;
        .productdetail {
            height: 30px;
        }
    }
    .reviewcount {
        padding: 10px;
        display: flex;
        > span {
            padding: 5px;
        }
        > div {
            padding: 5px;
            margin-left: 20px;
        }
    }
    .reviewcontent {
        padding: 5px;

        > article {
            font-family: TheJamsil5Bold;
        }
    }
`;

export const Title = styled.div`
    text-align: center;
    font-size: large;
    padding-left: 5px;
    margin-bottom: 20px;
`;