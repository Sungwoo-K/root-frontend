import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Layout = () => {
  return (
    <>
      <Container>
        <div className="Home">
          <Link to="">홈으로</Link>
        </div>
        <div className="Scrap">
          <Link to="">스크랩</Link>
        </div>
        <div className="Great">
          <Link to="">좋아요</Link>
        </div>
        <div className="Setting">
          <Link to="">설정</Link>
        </div>
      </Container>
    </>
  );
};

export default Layout;
