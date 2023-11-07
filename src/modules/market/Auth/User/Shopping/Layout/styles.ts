import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    margin-top: 3vh;
    align-items: center;

    height: 5%;
    justify-content: space-around;

    width: 1600px;
    padding-left: 5vw;

    .Home,
    .Shopping,
    .Great,
    .Setting {
        width: 200px;
        height: 50px;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        box-shadow: 5px 5px 20px #dbdbdb;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        .LinkHeader {
            color: black;
            text-decoration: none;
            font-family: yg-jalnan;
            font-size: large;
        }
    }
`;
