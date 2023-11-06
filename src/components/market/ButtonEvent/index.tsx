import { useState } from 'react';

export const ButtonEvent = (props) => {
    const { texts } = props;
    const [buttonMenu, setButtonMenu] = useState(0);

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
                    className={'buttonevent' + (idx == buttonMenu ? 'active' : '')}
                    onClick={clickButton}
                >
                    {item}
                </button>
            ))}
        </>
    );
};

export default ButtonEvent;
