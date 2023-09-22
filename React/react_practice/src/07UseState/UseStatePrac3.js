import { useState } from "react";

export default function UseStatePrac3() {
    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [comments, setComments] = useState([]);

    const onChange = (e) => {
        setInputWriter(e.target.value);
    };

    const addComment = () => {
        const newComment = {
            writer: inputWriter,
            title: inputTitle,
        };
        setComments([...comments, newComment]);
        setInputWriter("");
        setInputTitle("");
    };

    return (
        <>
            <form>
                <label htmlFor="writer">작성자:</label>
                {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                <input type="text" id="writer" value={inputWriter} onChange={(e) => onChange(e)} />
                <label htmlFor="title">제목:</label>
                <input type="text" id="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                <button type="button" onClick={addComment}>
                    작성
                </button>
            </form>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {/* [ {title, writer},{title, writer},{title, writer}... ] */}
                    {comments.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
