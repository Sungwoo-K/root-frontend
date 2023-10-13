import { PostMain } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import PostModifyModal from "./PostModifyModal";

interface PostItem {
  title: string;
  content: string;
  image?: string;
}

const Post = () => {
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
    const imageInput = postimageRef.current;

    if (!input.value.trim() || !textarea.value.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    console.log(input, textarea, imageInput);
    console.log(input.value, textarea.value, imageInput.value);

    if (imageInput && imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result as string;
        setPostList([
          { title: input.value, content: textarea.value, image: base64Image },
          ...PostList,
        ]);
        input.value = "";
        textarea.value = "";
        imageInput.value = "";
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      setPostList([
        { title: input.value, content: textarea.value },
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
    setPostList(
      PostList.map((item, idx) => {
        if (index === idx) {
          return { index, title, content };
        }
        return item;
      })
    );
    setShowModifyModal(false);
  };

  const handleModifyModalCancel = () => {
    setShowModifyModal(false);
  };

  useEffect(() => {
    console.log(PostList);
  }, [PostList]);

  return (
    <PostMain>
      <h1>🌞 게시판</h1>
      <input placeholder="제목을입력해주세요." ref={inputRef} />
      <textarea placeholder="내용을입력해주세요." ref={textareaRef}></textarea>
      {/* multiple 사용자가 한번에 여러개를 올림 */}
      {/* <input type="file" multiple accept="image/*, video/*"  /> */}
      <input type="file" ref={postimageRef} />
      <button onClick={handleAdd}>추가</button>
      {PostList.length > 0 && (
        <ul>
          {PostList.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  style={{ maxWidth: "30%", height: "auto" }}
                />
              )}
              <button onClick={() => handleOpenModifyModal(index)}>수정</button>
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
  );
};

export default Post;
