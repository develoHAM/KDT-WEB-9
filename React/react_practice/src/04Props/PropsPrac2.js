import "./PropsPrac2.css";
import book from "./1685519005341_0.jpg";

export default function PropsPrac2({ title, author, price, type }) {
    return (
        <div className="box">
            <div className="best">이번주 베트스셀러</div>
            <img src={book} width={300} />
            <div className="title">{title}</div>
            <div className="content">저자: {author}</div>
            <div className="content">판매가: {price}</div>
            <div className="content">구분: {type}</div>
        </div>
    );
}
