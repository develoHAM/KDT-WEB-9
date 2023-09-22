import { useState } from "react";

export default function UseStatePrac1() {
    const [text, setText] = useState("검정");
    const [color, setColor] = useState("black");

    const handleBlue = () => {
        setText("파란");
        setColor("blue");
    };
    const handleRed = () => {
        setText("빨간");
        setColor("red");
    };

    return (
        <div>
            <h1 style={{ color }}>{text}색 글씨</h1>
            <button onClick={handleRed}>빨간색</button>
            <button onClick={handleBlue}>파란색</button>
        </div>
    );
}
