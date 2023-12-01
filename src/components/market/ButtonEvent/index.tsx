import { useState } from "react";

export const ButtonEvent = (props) => {
  const { texts, getButtonValue } = props;

  const [buttonMenu, setButtonMenu] = useState(0);

  const clickButton = (e) => {
    setButtonMenu((idx) => {
      getButtonValue(idx);
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
