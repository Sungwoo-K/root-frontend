import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid;
    align-items: center;
`;

export const Orderlist = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    border: 1px solid;
    width: 900px;
    height: 100px;

    .list {
        display: flex;
        justify-content: center;
        width: 300px;
        height: 100px;
        border: 1px solid;
        border-radius: 13px;
        align-items: center;
    }
`;
