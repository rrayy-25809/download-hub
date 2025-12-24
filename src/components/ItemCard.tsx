import {Link} from 'react-router-dom';

type CardProp = {
    img: string;
    title: string;
    description: string;
    index: number
    link?: string;
}

function ItemCard({img, title, description, index}: CardProp) {
    return (
        <div className="content mb-3">
            <img src={img} className="img rounded" alt="..."></img>
            <div className="conts-main">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="btn" to={`content/${index}`} role="button">Download</Link>
            </div>
        </div>
    );
}

export default ItemCard;