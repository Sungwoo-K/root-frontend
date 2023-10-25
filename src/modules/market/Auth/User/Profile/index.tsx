import { useEffect, useState } from "react";
import http from "@/utils/http";
import ProfileHeader from "../Header";
import UserProfile from "./useProfile";

const Usepage = () => {
  return (
    <>
      <UserProfile />
    </>
  );
};

export default Usepage;
