import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ImageItem,
  TitleContainer,
  DetailContent,
  Detailsimg,
  ContentContainer,
  DetailsContainer,
  DetailsTitle,
  DetailsTime,
  ImageContainer,
} from "./styles";
import {
  PostSidebar,
  BestFont,
  BestItem,
  BestItemContainer,
} from "@/components/community/Sidebar/styles";

interface PostDetails {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  files: PostFile[];
}
interface PostFile {
  id: number;
  postId: number;
  contentType: string;
  originalFileName: string;
  uuidFileName: string;
}
function MediaElement({ file }: { file: PostFile }) {
  if (file.contentType.includes("image")) {
    return (
      <Detailsimg
        src={`http://localhost:8080/community/files?uuidFilename=${file.uuidFileName}`}
        alt={file.originalFileName}
      />
    );
  } else {
    return (
      <video controls width={300}>
        <source
          src={`http://localhost:8080/community/files?uuidFilename=${file.uuidFileName}`}
          type={file.contentType}
        />
      </video>
    );
  }
}

const Details = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        if (postId) {
          const response = await axios.get(
            `http://localhost:8080/community/posts/${postId}`
          );
          setPostDetails(response.data);
        }
      } catch (error) {
        console.error("게시물 상세 정보 불러오는데 실패", error);
      }
    };
    fetchPostDetails();
  }, [postId]);
  if (!postDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <DetailsContainer>
        <TitleContainer>
          <DetailsTitle>{postDetails.title}</DetailsTitle>
        </TitleContainer>
        <DetailsTime>작성날짜: {postDetails.createdDate}</DetailsTime>
        <ImageContainer>
          <ImageItem>
            {postDetails.files.map((file) => (
              <MediaElement key={file.id} file={file} />
            ))}
          </ImageItem>
        </ImageContainer>
        <ContentContainer>
          <DetailContent>{postDetails.content}</DetailContent>
        </ContentContainer>
      </DetailsContainer>
    </>
  );
};

export default Details;
