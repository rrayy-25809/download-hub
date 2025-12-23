import contents from '../contents.json'
import ItemCard from '../components/ItemCard';

function List_Page() {
    return (
        <div>
            {contents.map(
                (item, idx) => (
                    <ItemCard {...item} index={idx}></ItemCard>
                )
            )}
        </div>
    );
}

export default List_Page;