function JsxPrac1() {
    return (
        <>
            <div>
                이것은 div입니다
                <h3>이것은 div안에 있는 h3입니다</h3>
            </div>
            <div>{3 + 5 == 7 ? <div>정답입니다</div> : <div>오답입니다</div>}</div>
        </>
    );
}

export default JsxPrac1;
