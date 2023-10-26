import ProfileHeader from "../Header";
import UserProfile from "../Profile/useProfile";

import EditProfile from "./ProfileEdit";
import { Container } from "./styles";

const ProfileEdit = () => {
  return (
    <>
      <Container>
        <div className="edit">
          <EditProfile />
        </div>
      </Container>
    </>
  );
};

export default ProfileEdit;
