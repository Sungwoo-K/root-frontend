import { useState } from "react";

export const ButtonEvent = (props) => {
  const texts = ["상품", "배송", "반품", "교환", "환불", "기타"];
  const [buttonMenu, setButtonMenu] = useState(1);

  const clickButton = (e) => {
    setButtonMenu(() => {
      return e.target.value;
    });
  };

  return (
    <>
      {texts.map((item, idx) => (
        <button
          key={idx}
          value={idx}
          className={"buttonevent" + (idx == buttonMenu ? "active" : "")}
          onClick={clickButton}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default ButtonEvent;
