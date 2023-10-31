import styled from "@emotion/styled";

export const Categorydiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
`;

export const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  width: 500px;
  align-items: center;
`;
export const Profilediv = styled.div`
  display: flex;
  width: 310px;
  height: 500px;
  margin-left: 10vh;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid;
  .namediv {
    display: flex;
    width: 310px;
    height: 50px;

    justify-content: center;
    align-items: center;
  }
  .middlediv {
    width: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profileimg {
    width: 118px;
    height: 118px;
  }
  .profilediv {
    width: 310px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lastdiv {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    height: 50px;
    align-items: center;
  }
`;

export const Linkdiv = styled.div`
  width: 320px;
  height: 150px;
  display: flex;

  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Keydiv = styled.div``;

export const Profilecontain = styled.div`
  display: flex;
  margin-left: 30px;
`;

export const Button = styled.button`
  width: 30%;
  margin-top: 10px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  height: 100px;
  align-items: center;
  .Linkstyle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
