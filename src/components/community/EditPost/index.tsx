import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import http from "@/utils/http";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await http.get(
          `http://localhost:8080/community/posts/${postId}`
        );
        setPost({ title: response.data.title, content: response.data.content });
      } catch (error) {
        console.error("게시물 로드 실패", error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await http.put(`http://localhost:8080/community/update/${postId}`, post);
      alert("게시글이 수정되었습니다.");
      navigate(`/community/posts/${postId}`);
    } catch (error) {
      console.error("게시물 수정 실패", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <button type="submit">저장</button>
    </form>
  );
};

export default EditPost;
