import axios from "axios";
import {
  Maincontainer,
  ContentTitle,
  ImageItem,
  ViewDetailsLink,
} from "./styles";
import { useEffect, useState } from "react";

interface PostItem {
  id: number;
  title: string;
  userid: string;
  nickname: string;
  content: string;
  createdDate: string;
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
        height={300}
        src={`http://localhost:8080/community/files?uuidFilename=${uuidFileName}`}
      />
    );
  } else {
    return (
      <video controls>
        <source
          width={300}
          src={`http://localhost:8080/community/files?uuidFilename=${uuidFileName}`}
          type={contentType}
        />
      </video>
    );
  }
}
const Main = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/community/posts"
        );

        setPosts(response.data);
      } catch (error) {
        console.error("게시물 불러오는데 실패", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Maincontainer>
      <ImageItem
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {posts.map((post, idx) => (
          <div key={`post-item-${post.id}-${idx}`}>
            <ViewDetailsLink to={`/community/details/${post.id}`}>
              {post.files && post.files.length > 0 && (
                <MediaElement
                  key={post.files[0].uuidFileName}
                  uuidFileName={post.files[0].uuidFileName}
                  contentType={post.files[0].contentType}
                />
              )}
            </ViewDetailsLink>
            <div className="contentContainer">
              <ContentTitle>{post.title}</ContentTitle>
              <div className="Nickname">
                {/* <p>{post.nickname}</p> */}
                <p>닉네임</p>
              </div>
              <div className="Date">
                {/* <p>{post.createdDate}</p> */}
                <p>날짜</p>
              </div>
            </div>
          </div>
        ))}
      </ImageItem>
    </Maincontainer>
  );
};

export default Main;
