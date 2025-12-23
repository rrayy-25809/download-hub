type CardProp = {
    img: string;
    title: string;
    description: string;
    link?: string;
}

function ItemCard({img, title, description}: CardProp) {
    return (
        <div className="content mb-3">
            <img src={img} className="img rounded" alt="..."></img>
            <div className="conts-main">
                <h3>{title}</h3>
                <p>{description}</p>
                <a className="btn btn-primary" href="${link}" role="button" target="_blank">Download</a>
            </div>
        </div>
    );
}

export default ItemCard;