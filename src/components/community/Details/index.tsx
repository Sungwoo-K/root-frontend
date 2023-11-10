import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  TitleContainer,
  DetailContent,
  Detailsimg,
  ContentContainer,
  DetailsContainer,
  DetailsTitle,
  DetailsTime,
  ImageContainer,
} from "./styles";

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
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
function MediaElement({ file }: { file: PostFile }) {
  if (file.contentType.includes("image")) {
    // 이미지 파일의 경우, 여기서 렌더링을 처리하지 않습니다.
    return null;
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
  const imageFiles = postDetails.files.filter((file) =>
    file.contentType.includes("image")
  );
  const videoFiles = postDetails.files.filter((file) =>
    file.contentType.includes("video")
  );
  return (
    <>
      <DetailsContainer>
        <TitleContainer>
          <DetailsTitle>{postDetails.title}</DetailsTitle>
        </TitleContainer>
        <DetailsTime>작성날짜: {postDetails.createdDate}</DetailsTime>
        <ImageContainer>
          {imageFiles.length > 0 && (
            <Slider {...sliderSettings}>
              {imageFiles.map((file) => (
                <div key={file.id}>
                  <Detailsimg
                    src={`http://localhost:8080/community/files?uuidFilename=${file.uuidFileName}`}
                    alt={file.originalFileName}
                  />
                </div>
              ))}
            </Slider>
          )}
          {videoFiles.map((file) => (
            <MediaElement key={file.id} file={file} />
          ))}
        </ImageContainer>
        <ContentContainer>
          <DetailContent>{postDetails.content}</DetailContent>
        </ContentContainer>
      </DetailsContainer>
    </>
  );
};

export default Details;
