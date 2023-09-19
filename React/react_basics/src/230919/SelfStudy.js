function Event() {

    const click = (msg) => {
        console.log(msg)
    }

    return (
        <>
            <button onClick={() => click('hi')}>say hi</button>
        </>
    )
}

export default Event;