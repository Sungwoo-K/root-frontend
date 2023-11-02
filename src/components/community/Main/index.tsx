import axios from "axios";
import { Container } from "@/components/community/Header/styles";
import { useEffect, useState } from "react";

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
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {posts.map((post, idx) => (
          <li key={`post-item-${post.id}-${idx}`}>
            <div>
              {post.files && post.files.length > 0 && (
                <MediaElement
                  key={post.files[0].uuidFileName}
                  uuidFileName={post.files[0].uuidFileName}
                  contentType={post.files[0].contentType}
                />
              )}
            </div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </div>
    </Container>
  );
};

export default Main;
