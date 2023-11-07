import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 94%;
  font-family: "GmarketSansMedium";
  overflow-y: scroll;
  > section:first-of-type {
    display: flex;
    justify-content: center;
    height: 65px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.18s ease-in-out;
    background-color: white;
    > article {
      padding-top: 10px;
      width: 25%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
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
    width: 100%;
    display: flex;
  }
`;
