import http from "@/utils/http";
import {
  AddBtn,
  WriteContainer,
  WriteItem,
  WriteInput,
  WriteTextarea,
  DropArea,
} from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface PostItem {
  id: number;
  title: string;
  content: string;
  files: PostFile[];
}
interface PostFile {
  contentType: string;
  originalFileName: string;
  uuidFileName: string;
}

const Write = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  const fileRef = useRef() as MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const contentRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const formRef = useRef<HTMLFormElement>();

  useEffect(() => {}, []);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    Array.from(fileRef.current.files).forEach((file) => {
      formData.append("files", file);
    });
    formData.append("title", titleRef.current.value);
    formData.append("content", contentRef.current.value);
    (async () => {
      try {
        const response = await http.post<PostItem>(
          "http://localhost:8080/community/with-file",
          formData
        );
        console.log(response);
        if (response.status === 201) {
          formRef.current.reset();
          setPosts([{ ...response.data }, ...posts]);
        }
      } catch (error) {
        if (error.response) {
          console.error(
            "오류가 있고, 서버로부터의 응답이 있는 경우:",
            error.response.status
          );
        } else if (error.request) {
          console.error(
            "요청이 이루어 졌으나 응답을 받지 못한 경우:",
            error.request
          );
        } else {
          console.error("요청 설정 시 발생한 오류:", error.message);
        }
      }
    })();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    fileRef.current.files = files;
    console.log(files);
  };
  return (
    <>
      <WriteContainer>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
          }}
          ref={formRef}
          onSubmit={handlePost}
        >
          <DropArea onDragOver={handleDragOver} onDrop={handleDrop}>
            사진을 끌어다 놓으세요.
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/* video/*"
            />
          </DropArea>
          <WriteItem>
            <WriteInput
              ref={titleRef}
              type="text"
              placeholder="제목을입력해주세요"
            ></WriteInput>
            <WriteTextarea
              ref={contentRef}
              placeholder="내용을입력해주세요"
            ></WriteTextarea>
            <AddBtn type="submit">올리기</AddBtn>
          </WriteItem>
        </form>
      </WriteContainer>
    </>
  );
};

export default Write;
