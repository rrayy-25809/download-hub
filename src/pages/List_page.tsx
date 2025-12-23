import contents from '../contents.json'
import ItemCard from '../components/ItemCard';

function List_Page() {
    contents.reverse();
    const content_count = contents.length;

    return (
        <div>
            {contents.map(
                (item, idx) => (
                    <ItemCard {...item} index={content_count-idx-1}></ItemCard>
                )
            )}
        </div>
    );
}

export default List_Page;