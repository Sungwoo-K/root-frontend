import { MutableRefObject, useRef } from "react";

interface PostModifyModalProps {
  index: number;
  title: string;
  content: string;
  image?: string;

  onConfirm: (payload: {
    index: number;
    title: string;
    content: string;
    image?: string;
  }) => void;
  onCancel: () => void;
}
const PostModifyModal = ({
  index,
  title,
  content,
  image,
  onConfirm,
  onCancel,
}: PostModifyModalProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const modalImageRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleConfirm = () => {
    const newImage =
      modalImageRef.current.files && modalImageRef.current.files[0];
    if (newImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result as string;
        onConfirm({
          index,
          title: inputRef.current.value,
          content: textareaRef.current.value,
          image: base64Image,
        });
      };
      reader.readAsDataURL(newImage);
    } else {
      onConfirm({
        index,
        title: inputRef.current.value,
        content: textareaRef.current.value,
        image: image,
      });
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9990,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div style={{ width: "300px", padding: 20, backgroundColor: "white" }}>
        <input ref={inputRef} defaultValue={title} />
        <textarea ref={textareaRef} defaultValue={content}></textarea>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
          <input
            type="file"
            ref={modalImageRef}
            style={{ backgroundColor: `red` }}
          />
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default PostModifyModal;
