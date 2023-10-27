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
    // if (files.length > 0) {
    // }
  };
  return (
    <>
      <WriteContainer>
        <DropArea onDragOver={handleDragOver} onDrop={handleDrop}>
          사진을 끌어다 놓으세요.
          <input type="file" />
        </DropArea>
        <WriteItem>
          <AddBtn>올리기</AddBtn>
          <WriteInput type="text" placeholder="제목을입력해주세요"></WriteInput>
          <WriteTextarea placeholder="내용을입력해주세요"></WriteTextarea>
        </WriteItem>
      </WriteContainer>
    </>
  );
};

export default Write;
