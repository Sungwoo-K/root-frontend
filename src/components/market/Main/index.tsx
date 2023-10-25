import { Main } from "./styles";
import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default main;
