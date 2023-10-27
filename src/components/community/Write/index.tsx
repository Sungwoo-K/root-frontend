import {
  AddBtn,
  WriteContainer,
  WriteItem,
  WriteInput,
  WriteTextarea,
  DropArea,
} from "./styles";

const Write = () => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
  };
  return (
    <>
      <WriteContainer style={{}}>
        <DropArea onDragOver={handleDragOver} onDrop={handleDrop}>
          사진을 끌어다 놓으세요.
          <input type="file" />
        </DropArea>
        <WriteItem>
          <WriteInput type="text" placeholder="제목을입력해주세요"></WriteInput>
          <WriteTextarea placeholder="내용을입력해주세요"></WriteTextarea>
          <AddBtn>올리기</AddBtn>
        </WriteItem>
      </WriteContainer>
    </>
  );
};

export default Write;
