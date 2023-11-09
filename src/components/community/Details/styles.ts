import { Container } from "@/components/community/Header/styles";
import styled from "@emotion/styled";

export const DetailsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const DetailsTitle = styled.h1`
  font-size: 5vw;
  display: flex;
`;
export const DetailsTime = styled.p`
  display: grid;
  justify-content: space-between;
  align-items: end;
  margin-left: auto;
  font-size: 15px;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
`;
export const ImageItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2vw;
  padding: 3vw;
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  padding: 3vw;
`;
export const Detailsimg = styled.img`
  width: 27vw;
  height: 25vh;
`;

export const DetailContent = styled.p`
  font-size: 1.5vw;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5vw;
`;
