import styled from "@emotion/styled";

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  /* background-color: rgb(255, 217, 142, 0.1); */

  height: 100vh;
  width: 90px;
  align-items: center;
  padding-top: 40px;
  gap: 15px;
`;

export const Iconbutton = styled.button`
  display: row;
  background-color: white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border: none;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-left: 4px;
`;

export const Icon = styled.div``;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  /* background-color: rgb(255, 217, 142, 0); */
  gap: 4px;
`;

export const SideMenu = styled.p`
  margin-top: 3px;
  margin-left: 3px;
  font-size: 13px;
`;
