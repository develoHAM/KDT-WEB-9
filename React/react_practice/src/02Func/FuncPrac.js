function FuncPrac1() {
    //실습
    const users = [
        { id: 1, name: "John", age: 25, vip: true },
        { id: 2, name: "Jane", age: 19, vip: false },
        { id: 3, name: "Alice", age: 30, vip: true },
        { id: 4, name: "Bob", age: 18, vip: false },
        { id: 5, name: "Charlie", age: 35, vip: true },
    ];

    const vipUsers = users.filter((value) => value.vip === true);
    console.log(vipUsers);
    return (
        <>
            {vipUsers.map((value) => (
                <div key={value.id}>{value.name}</div>
            ))}
        </>
    );
}

export default FuncPrac1;
