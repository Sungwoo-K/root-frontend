import http from "@/utils/http";
import {
  StyleSelect,
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
const backgroundImageUrls = {
  sunny: "URL_FOR_SUNNY",
  cloudy: "URL_FOR_CLOUDY",
  rainy: "URL_FOR_RAINY",
  snowy: "URL_FOR_SNOWY",
};

const Write = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [weather, setWeather] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const fileRef = useRef() as MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const contentRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const formRef = useRef<HTMLFormElement>();

  useEffect(() => {}, []);
  const handleWeatherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWeather(e.target.value);
    setBackgroundImage(backgroundImageUrls[e.target.value]);
  };
  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    Array.from(fileRef.current.files).forEach((file) => {
      formData.append("files", file);
    });
    formData.append("backgroundImage", weather);
    formData.append("content", contentRef.current.value);
    formData.append("title", titleRef.current.value);

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
    console.log(files);
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
          <StyleSelect value={weather} onChange={handleWeatherChange} required>
            <option value={null}>날씨를 선택해주세요.</option>
            <option value="sunny">맑음 🌞</option>
            <option value="cloudy">흐림 🌫</option>
            <option value="rainy">비 ☔</option>
            <option value="snowy">눈 ⛄</option>
          </StyleSelect>
        </WriteForm>
      </WriteContainer>
    </>
  );
};

export default Write;
