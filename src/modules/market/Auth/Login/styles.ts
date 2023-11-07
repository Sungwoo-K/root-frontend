import styled from '@emotion/styled';

export const LoginHeader = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #fafafa;
    height: 100vh;
    padding: 0%;
`;

export const Headername = styled.p`
    font-family: 'Nanum Pen Script', cursive;
    font-size: 60px;
    color: black;
`;

export const Logindiv = styled.div`
    display: flex;
    flex-direction: column;
    .id {
        border-top: 1px solid #dbdbdb;
        border-bottom: none;
        border-right: 1px solid #dbdbdb;
        border-left: 1px solid #dbdbdb;
    }
    .pw {
        border-top: none;
        border-bottom: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;
        border-left: 1px solid #dbdbdb;
    }
`;

export const Logininput = styled.input`
    width: 300px;
    height: 50px;
    padding: 0px 0px 0px 10px;
`;

export const Loginbutton = styled.div`
    display: flex;
    justify-content: space-between;

    width: 150px;
`;

export const ExceptionButton = styled.button`
    cursor: pointer;
    border: none;
    width: 80px;
    height: 20px;
    background-color: #fafafa;
    font-size: 14px;
    padding-right: 0;
`;

export const Button = styled.button`
    width: 310px;
    height: 45px;
    border: none;
    background-color: #35c5f0;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-top: 25px;
    border: 1px solid #dbdbdb;
    :hover {
        transition: 0.3s;
        background-color: #009fce;
    }
`;
