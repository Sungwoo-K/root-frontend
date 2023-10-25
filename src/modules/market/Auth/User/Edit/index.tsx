import ProfileHeader from "../Header";
import UserProfile from "../Profile/useProfile";

import EditProfile from "./ProfileEdit";
import { Container } from "./styles";

const ProfileEdit = () => {
  return (
    <>
      {/* <ProfileHeader /> */}
      <Container>
        <UserProfile />
        <EditProfile />
      </Container>
    </>
  );
};

export default ProfileEdit;
