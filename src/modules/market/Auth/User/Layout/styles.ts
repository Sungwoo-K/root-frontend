import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    margin-top: 10vh;
    align-items: center;
    justify-content: space-between;
    gap: 16%;
    height: 10%;
    position: fixed;
    top: 0;
    left: 10%;
    right: 0;

    width: 80%;

    .Home,
    .Scrap,
    .Great,
    .Setting {
        width: 7%;
        height: 70%;
        border: 1px solid;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
