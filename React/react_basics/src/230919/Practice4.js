import bookCover from './img/book_cover.jpg'
import './Practice4.css'
function Practice({ title, author, price, type }) {
    return (
        <>
            <div>
                <h2 className='heading'>이번주 베스트 셀러</h2>
                <img src={bookCover}></img>
                <div className='bookInfo'>
                    <h2>{title}</h2>
                    <p>저자: {author}</p>
                    <p>판매가: {price}</p>
                    <p>구분: {type}</p>
                </div>
            </div>
        </>
    )
}

Practice.defaultProps = {
    title: 'asdf',
    author: 'asdf',
    price: 'asdf',
    type: 'asdf'
}

export default Practice;