import styled from "@emotion/styled";

export const Header = styled.div`
  background-color: rgb(255, 217, 142, 0.5);
  padding: 0cap, 16vh;
  display: flex;
  height: 65px;
  width: 100%;
  .sidebar {
    width: 250px;
    min-height: 100vh;
    /* box-shadow: 0px 4px 8px rgb(0 0 0 / 16%); */
    background-color: white;
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 1;
    transition: 0.3s;
    align-items: center;
  }
  .sidebar.active {
    left: 0;
  }
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }
  .sidebar-overlay.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const Menudiv = styled.div`
  .menulist {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 30px;
    font-size: large;
    gap: 10px;
    .button {
    }
  }

  .menulist li {
    font-size: medium;
    margin-left: 10px;
  }
`;

export const Menubutton = styled.div`
  display: flex;
  margin-left: 15px;

  justify-content: center;
  align-items: center;
  background-color: rgb(255, 217, 142, 0);

  width: 70px;
  height: 60px;

  cursor: pointer;
`;

export const ToggleButton = styled.div`
  display: flex;
  margin-left: 15px;

  justify-content: center;
  align-items: flex-end;

  background-color: rgb(255, 217, 142, 0);
  width: 70px;
  height: 55px;

  cursor: pointer;
`;

export const menulist = styled.ul`
  display: flex;
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

export const Iconbutton = styled.button`
  display: flex;
  background-color: white;
  justify-content: center;
  margin-left: 28px;
  margin-right: 30px;
  border-radius: 50%;
  border: none;
  align-items: flex-end;
  cursor: pointer;
  width: 40px;
  height: 40px;
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

export const SideMenu = styled.p`
  display: flex;
  width: 100px;
  margin-top: 3px;
  margin-left: 3px;
  font-size: 15px;
  justify-content: center;
`;

export const Button = styled.div`
  margin-top: 10px;
  padding: 0;

  display: flex;
  align-items: center;
  cursor: pointer;
  .listbutton {
    justify-content: center;
    align-items: flex-end;
  }
`;
