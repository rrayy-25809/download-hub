import { useParams, Link } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed';
import contents from '../contents.json'

function Item_Page() {
    const { id } = useParams();
    const idx = Number(id);
    const item = contents[idx];

    if (!item) return (
        <div className="container item-page">
            <p>항목을 찾을 수 없습니다.</p>
            <Link to="/" className="btn-outline">목록으로</Link>
        </div>
    );
    
    return (
        <div className="container item-page">
            <Link to="/" className="back">← 목록으로</Link>

            <section className="large-card">
                <img src={item.img} className="hero" alt={item.title} />

                <div className="content-body">
                    <h1 className="title">{item.title}</h1>
                    <p className="description">{item.description}</p>
                    <VideoEmbed link={item.link}></VideoEmbed>
                    <div className="actions">
                        <a className="btn download" href={item.link} target="_blank" rel="noopener noreferrer">Download</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Item_Page;