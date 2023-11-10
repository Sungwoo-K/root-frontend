import styled from "@emotion/styled";
import { Bestfiles } from "../Sidebar/styles";
import { Container } from "@/components/community/Header/styles";
import { WriteItem } from "@/components/community/Write/styles";
import { Link } from "react-router-dom";

export const PostMain = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 20vw;
  width: 100%;
  margin-right: 5%;
  border-radius: 10% 0 0 0;
`;

export const ImageItem = styled(WriteItem)`
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: calc(25% * 4);
  margin: 0vw;
  gap: 2.3vw;
`;
export const ViewDetailsLink = styled(Link)`
  flex: 0 0 25%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin-top: 2vw;
`;
export const Maincontainer = styled(Container)``;
export const ContentTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  max-width: 100%;
`;
