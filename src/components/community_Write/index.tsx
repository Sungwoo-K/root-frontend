import { AddBtn, WriteContainer,WriteInput, WriteTextarea,} from "./styles";




const main = () => {
  return (
    <>
      <WriteContainer>

          <AddBtn>올리기</AddBtn>
          <WriteInput type="text" placeholder="제목을입력해주세요"></WriteInput>
          <WriteTextarea placeholder="내용을입력해주세요"></WriteTextarea>

      </WriteContainer>
    </>
  );
};

export default main;
