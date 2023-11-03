import { Container } from "@/components/community/Header/styles";
import {
  PostSidebar,
  BestFont,
  BestItem,
  BestItemContainer,
} from "@/components/community/Sidebar/styles";

const Sidebar = () => {
  return (
    <PostSidebar>
      <BestItemContainer>
        <BestFont>상세페이지</BestFont>
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
