import styled from "@emotion/styled";

export const HottestContainer = styled.article`
  width: 100%;
  height: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 5px;

  > section {
    border: 1px solid;
    height: 450px;
    width: 1250px;

    > p {
      font-size: 20px;
      font-weight: 600;
      margin: 10px;
    }

    > article {
      height: 400px;
      width: 1200px;
      display: inline-flex;
      gap: 20px;
      > section {
        position: relative;
        width: 250px;
        height: 400px;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
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

        > div:first-of-type {
          position: absolute;
          right: 10px;
          top: 3px;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
