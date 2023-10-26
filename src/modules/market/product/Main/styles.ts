import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%;
  height: 95%;

  section:first-of-type {
    width: 100%;
    height: 500px;
  }
  section:last-of-type {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;

    a {
      text-decoration: none;
      color: #e56612;

      article {
        width: 170px;
        height: 170px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        border-radius: 25px;
        animation: appear 0.9s, appearMove 0.7s;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        span {
          font-family: "GmarketSansMedium";
          color: black;
        }
      }
    }

    a:focus,
    a:visited {
      color: #e56612;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes appearMove {
    from {
      transform: translateY(7%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
