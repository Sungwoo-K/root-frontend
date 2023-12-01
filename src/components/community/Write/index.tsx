import http from "@/utils/http";
import {
  AddBtn,
  WriteContainer,
  AddBtncontainer,
  ContentContainer,
  WriteInput,
  WriteTextarea,
  DropArea,
  DropFont,
  WriteForm,
  PreviewContent,
} from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { MultiStats } from "webpack";

interface PostItem {
  id: number;
  title: string[];
  content: string[];
  files: PostFile[];
}
interface PostFile {
  contentType: string;
  originalFileName: string;
  uuidFileName: string;
}
function MediaElement({
  contentType,
  uuidFileName,
}: {
  contentType: string;
  uuidFileName: string;
}) {
  if (contentType.includes("image")) {
    return (
      <img
        width={300}
        src={`http://localhost:8080/post/files/${uuidFileName}`}
      />
    );
  } else {
    return (
      <video>
        <source
          src={`http://localhost:8080/post/files/${uuidFileName}`}
          type={contentType}
        ></source>
      </video>
    );
  }
}

const Write = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

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

    formData.append("content", contentRef.current.value);
    formData.append("title", titleRef.current.value);

    (async () => {
      try {
        const response = await http.post<PostItem>(
          "http://localhost:8080/community/with-file",
          formData
        );
        if (response.status === 201) {
          formRef.current.reset();
          setPosts([{ ...response.data }, ...posts]);
        }
      } catch (error) {
        console.error("Error posting data:", error);
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
    createFilePreviews(files);
  };
  const createFilePreviews = (files: FileList) => {
    const fileArray = Array.from(files);
    const newFilePreviews = fileArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setFilePreviews(newFilePreviews);
  };
  const handleFilesSelected = (e) => {
    const files = e.target.files;
    createFilePreviews(files);
  };

  return (
    <>
      <WriteContainer>
        <WriteForm ref={formRef} onSubmit={handlePost}>
          <DropArea
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            isFilled={filePreviews.length > 0}
          >
            {filePreviews.length === 0 && (
              <DropFont>이미지를 끌어다 놓으세요.</DropFont>
            )}
            {filePreviews.map((previewUrl, index) => (
              <PreviewContent key={index}>
                <img
                  src={previewUrl}
                  alt={`Preview ${index}`}
                  style={{
                    display: "block",
                    width: index === 0 ? "400px" : "200px",
                    marginBottom: "7vw",
                  }}
                />
              </PreviewContent>
            ))}
          </DropArea>
          <ContentContainer>
            <WriteInput
              ref={titleRef}
              type="text"
              placeholder="제목을입력해주세요."
              required
            ></WriteInput>

            <WriteTextarea
              ref={contentRef}
              placeholder="내용을입력해주세요."
              required
            ></WriteTextarea>
          </ContentContainer>
          <AddBtncontainer>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/* video/*"
              onChange={handleFilesSelected}
            />
            <AddBtn type="submit">올리기</AddBtn>
          </AddBtncontainer>
        </WriteForm>
      </WriteContainer>
    </>
  );
};

export default Write;
