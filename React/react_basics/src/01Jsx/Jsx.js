function Jsx() {
    const flag = false;
    let txt = "";

    if (flag) {
        txt = "true 입니다";
    } else {
        txt = "false 입니다";
    }
    const styles = {
        backgroundColor: "red",
    };

    return (
        <>
            <h1 style={{ backgroundColor: "black", color: "white" }}>
                Hello React
            </h1>
            <div style={styles}>리액트 시작</div>
            <input />
            <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
            <div className="text">{txt}</div>
        </>
    );
}

export default Jsx;
