import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 95%;
  font-family: "GmarketSansMedium";
  overflow: auto;
  > section:first-of-type {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.18s ease-in-out;
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
    height: 90%;
    display: flex;
  }
`;
