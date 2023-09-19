import './Practice1.css'

function Caterpillar() {
    return (
        <>
            <div className="caterpillar">
                <div className="eye">
                    <div className="white"></div>
                    <div className="black"></div>
                </div>
                <div className="body one"></div>
                <div className="body two"></div>
                <div className="body three"></div>
                <div className="body four"></div>
                <div className="body five"></div>
            </div>
            <img src='/images/pngwing.com.png' alt="grass" className="grass" />
        </>
    )
}

export default Caterpillar;