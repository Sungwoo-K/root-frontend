import { Link } from "react-router-dom";
import { Categorydiv } from "../Profile/useProfile/styles";

const ProfileHeader = () => {
  return (
    <>
      <Categorydiv>
        <Link to="">프로필</Link>
        <Link to="">나의 쇼핑</Link>
        <Link to="">나의 리뷰</Link>
        <Link to="">설정</Link>
      </Categorydiv>
    </>
  );
};

export default ProfileHeader;
