import styled from "@emotion/styled";

export const Button = styled.button`
  cursor: pointer;
  background-color: rgb(255, 217, 142, 0);
  border: none;
  margin-left: 7px;
  align-items: center;
  display: flex;
`;

export const Header = styled.div`
  background-color: rgb(255, 217, 142, 0.5);
  padding: 0cap, 16vh;
  display: flex;
  height: 65px;
  width: 100%;
`;

export const Menubutton = styled.button`
  display: flex;
  /* margin-left: 5px; */
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 217, 142, 0);
  /* background-color: white; */
  /* border-radius: 50%; */
  border: none;
  width: 70px;
  height: 60px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */

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
  margin-bottom: 10px;
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
