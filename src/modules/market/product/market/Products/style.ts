import styled from "@emotion/styled";

export const Category = styled.article`
  width: 350px;
  height: 100%;

  > section {
    padding-top: 100px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;

    > a {
      color: black;
      border-top: 1px solid black;
      width: 150px;
      padding: 20px;

      > span {
        font-size: 18px;
        display: inline-block;
        transition: all 0.1s ease-in-out;
      }
    }

    > a:hover:not(:nth-of-type(4)):not(:nth-of-type(5)) > span {
      transform: translateX(90px);
    }
    > a:hover:nth-of-type(4) > span {
      transform: translateX(70px);
    }
    > a:hover:nth-of-type(5) > span {
      transform: translateX(60px);
    }

    > a:last-of-type {
      border-bottom: 1px solid black;
    }

    > a:visited {
      color: black;
    }
  }
`;

export const Product = styled.article`
  padding-top: 50px;
  width: 81%;
  overflow: auto;
  > div {
    overflow-y: auto;
    position: relative;
    display: inline-block;
    margin-left: 70px;
    margin-bottom: 90px;
    width: 250px;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    @media screen and (max-width: 1730px) {
      margin-left: 100px;
    }
    @media screen and (max-width: 1420px) {
      margin-left: 100px;
    }
    @media screen and (max-width: 1120px) {
      display: block;
      margin: 0 auto;
      margin-bottom: 90px;
    }

    > p:first-of-type {
      font-size: 15px;
      margin: 10px;
    }

    > img {
      width: 230px;
      height: 230px;
      display: block;
      margin: 0 auto;
    }

    > p:nth-of-type(2) {
      font-size: 15px;
      margin: 15px;
      word-wrap: break-word;
    }

    > p:nth-of-type(3) {
      position: absolute;
      right: 10px;
      bottom: 30px;
      font-size: 15px;
    }
    > p:nth-of-type(4) {
      font-size: 15px;
      bottom: 8px;
      right: 10px;
      position: absolute;
    }
  }
`;
