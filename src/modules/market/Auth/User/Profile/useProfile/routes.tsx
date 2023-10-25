import { Route } from "react-router-dom";

import User from "..";
import Edit from "../../Edit/ProfileEdit";
import ProfileEdit from "../../Edit";

export const userProfile = [<Route key="profile" element={<User />} index />];

export const profileEdit = [
  <Route key="profileEdit" element={<ProfileEdit />} index />,
];
