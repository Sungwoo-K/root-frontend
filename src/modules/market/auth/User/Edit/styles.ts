import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid white;
    height: 502px;
    width: 65%;
    margin-left: 5%;
    align-items: center;
    .firstedit {
        display: flex;
        width: 100%;
        align-items: flex-start;
        height: 130px;
        top: 0;
    }
`;

export const Editdiv = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: 90px;
    width: 500px;
    .inputimg {
        display: inline-block;
        height: 40px;
        padding: 0px 10px;
        vertical-align: middle;
        border: 1px solid skyblue;
        border-radius: 14px;
        margin-left: 5px;
        width: 294px;

        color: #999999;
        ::file-selector-button {
            display: none;
        }
    }
`;

export const Editusername = styled.div``;

export const Editinput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid skyblue;
    padding-left: 10px;
    border-radius: 14px;
`;

export const Select = styled.select`
    width: 50vh;
`;

export const P = styled.p`
    margin-top: 2vh;
    text-align: center;
    margin-bottom: 4vh;
    font-size: 24px;
    font-weight: 700;
`;

export const Button = styled.button`
    width: 150px;
    height: 45px;
    border: none;
    background-color: #35c5f0;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

export const Buttondiv = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-evenly;
    margin-left: 5%;
    align-items: flex-start;
    height: 100%;
    cursor: pointer;
`;

export const Editp = styled.p`
    width: 120px;
    height: 60px;
    margin-top: 15px;
    font-family: NanumSquareNeo-Variable;
`;

export const Seconddiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 120px;
    align-items: center;
`;
