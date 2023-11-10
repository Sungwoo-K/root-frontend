import styled from '@emotion/styled';

export const Container = styled.div`
    align-items: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    align-items: center;
`;

export const Orderlist = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 300px;
    width: 550px;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;

    .list {
        display: flex;
        justify-content: center;
        width: 200px;
        height: 50px;
        align-items: center;
    }
    .link {
        text-decoration: none;
        color: black;
        font-family: KOTRAHOPE;
        font-size: large;
        font-weight: bold;
        color: #2f3438;
    }
`;
