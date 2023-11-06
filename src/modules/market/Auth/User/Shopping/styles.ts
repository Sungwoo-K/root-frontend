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
    justify-content: space-around;
    width: 900px;
    height: 50px;

    .list {
        display: flex;
        justify-content: center;
        width: 200px;
        height: 50px;
        border-right: 1px solid;
        border-left: 1px solid;
        align-items: center;
    }
`;
