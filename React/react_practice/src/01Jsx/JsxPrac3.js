import "./App.css";

function JsxPrac3() {
    const title = "Hello React";

    return (
        <>
            <div className="text">{title}</div>
            <div className="input">
                아이디: <input />
                <br />
                <br />
                비밀번호: <input />
            </div>
        </>
    );
}

export default JsxPrac3;
