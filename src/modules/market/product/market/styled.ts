import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 95%;
  > section:first-of-type {
    display: flex;
    justify-content: center;
    height: 15%;

    > article {
      padding-top: 50px;
      width: 25%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "GmarketSansMedium";
      font-size: 19px;

      > a {
        text-decoration: none;
        color: white;
        width: 250px;
        height: 50px;
        border-radius: 20px;
        background-color: #e56612;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s ease-in-out;
      }

      > a:focus,
      a:visited {
        color: white;
      }

      > a:hover {
        transform: scale(107%);
      }
    }
  }

  > section:last-of-type {
    border: 1px solid black;
    width: 100%;
    height: 85%;
  }
`;
