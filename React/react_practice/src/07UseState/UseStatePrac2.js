import { useState } from "react";

export default function UseStatePrac2() {
    const [visible, setVisible] = useState(true);

    const handleVisible = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button onClick={handleVisible}>{visible ? "사라져라" : "보여라"}</button>
            <h1>{visible && "안녕하세요"}</h1>
        </div>
    );
}
