import { Container } from "@/components/community/Header/styles";
import styled from "@emotion/styled";

export const DetailsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const DetailsTitle = styled.h1`
  font-size: 2vw;
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
  align-items: center;
  width: 80vw;
  height: auto;
  overflow: hidden;
  position: relative;
  margin: 5vw;

  .slick-slider {
    width: 550px;
  }
  .slick-dots {
    position: relative;
    z-index: 1;
    bottom: 0;

    .slick-active > button {
      ::before {
        font-size: 1vw;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  padding: 3vw;
`;
export const Detailsimg = styled.img`
  width: 550px;
  height: auto;
`;

export const DetailContent = styled.p`
  font-size: 1vw;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5vw;
`;
