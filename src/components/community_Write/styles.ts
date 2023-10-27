import styled from "@emotion/styled";
import {
  Container,
  PostAddButton,
} from "../community_Header/styles";

export const WriteContainer = styled(Container)``;
export const AddBtn = styled(PostAddButton)`
margin-bottom: 10px;
`;
export const WriteInput = styled.input`margin-bottom: 10px;

`;
export const WriteTextarea = styled.textarea`margin-bottom: 10px;
`;
export const DropArea = styled.div`
  background-color: #f9f9f9;
 border: 2px dashed #ccc;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    background-color: white
  }
`
export const WriteItem = styled.div`
display: flex;
  flex-direction: column;
  margin: auto;
  `;
