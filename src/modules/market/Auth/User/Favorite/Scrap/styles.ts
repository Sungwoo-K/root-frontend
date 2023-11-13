import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Product = styled.article`
  padding-top: 50px;
  margin-left: 120px;
  width: 1600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  > section {
    user-select: none;
    overflow-y: auto;
    position: relative;
    display: inline-block;
    margin-left: 70px;
    margin-bottom: 90px;
    width: 250px;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    > div {
      > p:first-of-type {
        font-size: 15px;
        margin: 10px;
        font-family: SBAggroB;
      }

      > img {
        width: 230px;
        height: 230px;
        display: block;
        margin: 0 auto;
        border: 1px solid #dbdbdb;
      }

      > p:nth-of-type(2) {
        font-size: x-large;
        margin: 15px;
        margin-top: 30px;
        word-wrap: break-word;
        font-family: SBAggroB;
        align-items: center;
        text-align: center;
      }

      > p:nth-of-type(3) {
        position: absolute;
        right: 10px;
        bottom: 30px;
        font-size: large;
        font-family: KOTRAHOPE;
      }
      > p:nth-of-type(4) {
        font-size: 15px;
        bottom: 8px;
        right: 10px;
        position: absolute;
      }

      > div:first-of-type {
        position: absolute;
        right: 10px;
        top: 3px;
        width: 30px;
        height: 30px;
      }
      > div:last-of-type {
        position: absolute;
        left: 10px;
        bottom: 20px;
        width: 30px;
        height: 30px;
        color: #f6b719;
      }
    }
  }
`;
