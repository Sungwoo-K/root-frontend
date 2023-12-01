import { Suspense } from "react";
import { Main } from "./styles";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const main = () => {
  return (
    <>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default main;
