function Func() {
    //map함수
    const lists = ["k", "d", "t", "w", "e", "b"];
    //filter함수
    const animals = ["dog", "cat", "rabbit"];
    const newAnimals = animals.filter((value) => {
        return value.includes("a");
    });
    console.log(newAnimals);
    //단축평가
    //&&연산자
    const result = true && "Hello";
    console.log(result);
    //||연산자
    const defaultValue = 1000;
    const price = undefined;
    const dbPrice = price || defaultValue;
    console.log(dbPrice);

    const isLogin = true;

    return (
        <>
            <h1 style={{ backgroundColor: "black", color: "white" }}>
                Hello React
            </h1>
            {isLogin && (
                <>
                    {lists.map((value, index) => {
                        return (
                            <div key={index}>
                                <p>Hello {value}</p>
                            </div>
                        );
                    })}
                </>
            )}
        </>
    );
}

export default Func;
