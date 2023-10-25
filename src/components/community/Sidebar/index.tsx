import { Container } from "../Header/styles";
import { PostSidebar, BestFont, BestItem, BestItemContainer } from "./styles";
// import { HeaderAtag, PostHeader, Container } from "./styles";
const Sidebar = () => {
  return (
    <PostSidebar>
      <BestItemContainer>
        <BestFont>BestContent</BestFont>
      </BestItemContainer>
      <Container>
        <BestItem>imge</BestItem>
        <BestItem>imge</BestItem>
        <BestItem>imge</BestItem>
        <BestItem>imge</BestItem>
      </Container>
    </PostSidebar>
  );
};

export default Sidebar;
