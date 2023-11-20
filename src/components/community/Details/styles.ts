import { AddBtncontainer } from "@/components/community/Write/styles";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BaseBtn } from "@/components/community/Header/styles";
interface DetailsContainerProps {
  backgroundImage?: string;
}

export const DetailsContainer = styled.div<DetailsContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-size: cover;
  justify-content: space-between;

  align-items: center;
  margin: 1vw 11vw;
  max-width: 80vw;
  padding: 2vw 0.1vw;

  &::before {
    content: "";
    position: absolute;
    top: 0vw;
    left: -11vw;
    right: -11vw;
    bottom: -2vw;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.backgroundImage});
    opacity: 0.3;
    z-index: -1;
  }
`;

export const DetailsTitle = styled.h1`
  font-size: 3vw;
  font-family: iceSotong-Rg;
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
  font-size: 2vw;
  font-family: iceSotong-Rg;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5vw;
  bottom: 2vw;
`;
export const DeleteBtn = styled.button`
  justify-content: end;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  font-size: 2vw;
  font-family: "Nanum Pen Script", cursive;
  background-color: #bdf6fe;
  width: 9vw;
  height: 2vw;
  margin-bottom: 2vw;
  margin: 1vw;
`;
export const DeleteContainer = styled(AddBtncontainer)`
  display: flex;
  flex-direction: column;
`;

export const ModyfyLink = styled(Link)`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: none;
  font-family: "Nanum Pen Script", cursive;
`;
export const ModyfyBut = styled(BaseBtn)`
  padding: 0.2vw 1vw;
  background-color: skyblue;
  font-size: 1.6vw;
  border-radius: 35px;
  text-decoration: none;
  color: white;
`;
