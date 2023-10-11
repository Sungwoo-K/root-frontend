import styled from "@emotion/styled";

export const Header = styled.div`
  background-color: rgb(255, 217, 142, 0.5);
  padding: 0%, 16vh;
  display: flex;
  height: 65px;
  width: 100%;
`;

export const Menubutton = styled.button`
  background-color: none;
  margin-left: 10px;
  margin-right: 20px;
  background-color: rgb(255, 217, 142, 0.1);
  border: 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const Title = styled.div`
  @font-face {
    font-family: "TAEBAEKfont";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/TAEBAEKfont.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  margin-left: 10px;
  align-items: center;
  font-size: 29px;
  margin-top: 10px;
  justify-content: center;
  text-decoration: none;
  font-family: "TAEBAEKfont";
`;

export const Campdiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;

export const Inputdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 35px;
  float: right;
  justify-content: flex-end;
  margin-right: 3vh;
`;

export const Input = styled.input`
  width: 30%;
  height: 35px;
  border: 0.5cap;
`;

export const Hedaerline = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  justify-content: space-between;
`;

export const Searchbutton = styled.button`
  width: 40px;
  height: 41px;
  background-color: white;
  border: 1;
`;
