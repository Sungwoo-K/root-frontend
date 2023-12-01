import styled from "@emotion/styled";
import { Container, PostAddButton } from "@/components/community/Header/styles";
interface DropAreaProps {
  isFilled?: boolean;
}

export const WriteContainer = styled(Container)`
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-evenly;
`;
export const AddBtn = styled(PostAddButton)`
  margin-bottom: 10px;
`;
export const WriteInput = styled.input`
  border-radius: 10px 10px 10px 10px;
  font-size: 25px;
  font-family: "Nanum Pen Script", cursive;
  background-color: #bdf6fe;
  width: 22vw;
  height: 1.5vw;
  margin-bottom: 2vw;
  display: grid;
`;
export const WriteTextarea = styled.textarea`
  font-family: "Nanum Pen Script", cursive;
  border-radius: 10px 10px 10px 10px;
  font-size: 25px;
  background-color: #bdf6fe;
  width: 31vw;
  height: 16vw;
  margin-bottom: 2vw;
  resize: none;
  list-style: armenian;
`;
export const DropArea = styled.div<DropAreaProps>`
  border-radius: 10px 10px 10px 10px;
  background-color: ${(props) => (props.isFilled ? "white" : "#bdf6fe")};
  border: 2px dashed ${(props) => (props.isFilled ? "white" : "#ffd400")};
  width: 20vw;
  height: 20vw;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  max-height: 80vh;
  max-width: 100vw;
  &:hover {
    background-color: ${(props) => (props.isFilled ? "white" : "#e6e6e6")};
  }
`;
export const WriteItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const WriteForm = styled.form`
  display: flex;

  flex-wrap: wrap;
  align-content: flex-start;
  gap: 3vw;
  width: 100%;
  height: 100%;
`;
export const PreviewImg = styled.div`
  margin-right: 10px;
`;
export const PreviewContent = styled.div`
  margin: 3vw;
  display: flex;
  width: 1000px;
  flex-direction: row;
  align-items: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
`;
export const AddBtncontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  width: 100%;
  input {
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    font-size: 1vw;
    font-family: "Nanum Pen Script", cursive;
    background-color: #bdf6fe;
    width: 9vw;
    height: 2vw;
    margin: 0.5vw;
  }
`;
export const DropFont = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 1.5vw;
  text-align: center;
  margin-top: 8vw;
`;
export const StyleSelect = styled.select`
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  font-size: 25px;
  font-family: "Nanum Pen Script", cursive;
  background-color: #bdf6fe;
  width: 9vw;
  height: 2vw;
  margin-bottom: 2vw;
`;
export const KakaoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  svg {
    width: 25vw;
    height: 20vw;
  }

  button {
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    font-size: 2vw;
    font-family: "Nanum Pen Script", cursive;
    background-color: #bdf6fe;
    width: 9vw;
    height: 2vw;
    margin-bottom: 2vw;
    margin: 1vw;
  }
  input {
    font-family: "Nanum Pen Script", cursive;
    border-radius: 10px 10px 10px 10px;
    font-size: 2vw;
    background-color: #bdf6fe;
    width: 16vw;
    height: 2vw;
    margin-bottom: 2vw;
    resize: none;
    list-style: armenian;
    margin: 1vw;
  }
`;
