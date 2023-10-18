import { PostMain } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import PostModifyModal from "./PostModifyModal";
import { Container } from "../community_Header/styles";

interface PostItem {
  title: string;
  content: string;
  files: PostFile[];
}
interface PostFile {
  contentType: string;
  originalFileName: String;
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
        src={`http://localhost:5000/community/${uuidFileName}`}
      />
    );
  } else {
    return (
      <video>
        <source
          src={`http://localhost:5000/community/${uuidFileName}`}
          type={contentType}
        ></source>
      </video>
    );
  }
}

const Post = () => {
  const [postFiles, setPostFiles] = useState<File[]>([]);
  const [PostList, setPostList] = useState<PostItem[]>([]);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [modifyItem, setModifyItem] = useState({
    index: 0,
    title: "",
    content: "",
  });

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const postimageRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleAdd = () => {
    const input = inputRef.current;
    const textarea = textareaRef.current;

    // 파일이 선택되었는지 확인
    if (postFiles.length > 0) {
      // 선택한 파일에서 PostFile 객체 배열을 생성합니다.
      const tempFiles: PostFile[] = postFiles.map((file) => ({
        contentType: file.type,
        originalFileName: file.name,
        uuidFileName: `${Date.now()}-${file.name}`,
      }));
      setPostList([
        { title: input.value, content: textarea.value, files: tempFiles },
        ...PostList,
      ]);
      input.value = "";
      textarea.value = "";
      setPostFiles([]);
    } else {
      setPostList([
        { title: input.value, content: textarea.value, files: [] }, // 파일 속성은 빈 배열로 설정합니다.
        ...PostList,
      ]);
      input.value = "";
      textarea.value = "";
    }
  };

  const handleRemove = (index: number) => {
    setPostList(PostList.filter((_, idx) => idx !== index));
  };

  const handleOpenModifyModal = (index: number) => {
    setShowModifyModal(true);

    setModifyItem({
      index,
      title: PostList[index].title,
      content: PostList[index].content,
    });
  };

  const handleModifyModalConfirm = ({
    index,
    title,
    content,
  }: {
    index: number;
    title: string;
    content: string;
  }) => {
    const updatedPostList = PostList.map((item, idx) => {
      if (index === idx) {
        return { ...item, title, content };
      }
      return item;
    });

    setPostList(updatedPostList);
    setShowModifyModal(false);
  };

  const handleModifyModalCancel = () => {
    setShowModifyModal(false);
  };

  useEffect(() => {
    console.log(PostList);
  }, [PostList]);

  return (
    <Container>
      <PostMain>
        <h1>🌞 게시판</h1>
        <input placeholder="제목을입력해주세요." ref={inputRef} />
        <textarea
          placeholder="내용을입력해주세요."
          ref={textareaRef}
        ></textarea>
        <input type="file" ref={postimageRef} />
        <button onClick={handleAdd}>추가</button>
        {PostList.length > 0 && (
          <ul>
            {PostList.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {post.files && post.files.length > 0 && (
                  <img
                    src={`http://localhost:5000/community/${post.files[0].uuidFileName}`}
                    style={{ maxWidth: "30%", height: "auto" }}
                  />
                )}
                <button onClick={() => handleOpenModifyModal(index)}>
                  수정
                </button>
                <button onClick={() => handleRemove(index)}>삭제</button>
              </li>
            ))}
          </ul>
        )}
        {showModifyModal && (
          <PostModifyModal
            index={modifyItem.index}
            title={modifyItem.title}
            content={modifyItem.content}
            onConfirm={handleModifyModalConfirm}
            onCancel={handleModifyModalCancel}
          />
        )}
      </PostMain>
    </Container>
  );
};

export default Post;
