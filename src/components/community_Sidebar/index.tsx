import { Container } from "../community_Header/styles";
import { PostSidebar, BestFont, BestItem, BestItemContainer } from "./styles";
// import { HeaderAtag, PostHeader, Container } from "./styles";
const main = () => {
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

export default main;
