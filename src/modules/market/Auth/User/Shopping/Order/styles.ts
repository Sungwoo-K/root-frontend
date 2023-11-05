import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    width: 100%;
`;

export const Totalimg = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    width: 1600px;

    margin-left: 50px;
    margin-bottom: 90px;
`;

export const Detail = styled.section`
    border-radius: 15px;
    overflow-y: auto;
    margin-bottom: 80px;
    position: relative;
    user-select: none;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* margin-left: 20px; */
    height: 340px;
    margin: 18px;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    .brandname {
        display: block;
        justify-content: flex-start;
        align-items: top;
        padding: 10px 0px 10px 15px;
    }
    > img {
        padding: 10px 15px 15px 15px;
        position: relative;
    }
`;
export const BrandName = styled.p`
    display: flex;
    background-color: yellow;
    padding-left: 15px;
    height: 70px;
    justify-content: center;
    align-items: center;
    font-size: x-large;
`;

export const ProductPrice = styled.p`
    padding-right: 15px;
    display: flex;
    justify-content: right;
    padding: 10px 15px 2px 0;
`;
