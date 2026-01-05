import { useState, forwardRef, useImperativeHandle } from 'react';
import contents from '../contents.json'
import ItemCard from '../components/ItemCard';


const List_Page = forwardRef<ListHandle>((_props, ref) => {
    const reversed_list = [...contents].reverse();
    const content_count = contents.length;
    const [searchTerm, setSearchTerm] = useState("")
    useImperativeHandle(ref, () => ({ setSearch: (v: string) => setSearchTerm(v) }));
    
    return (
        <div>
            {reversed_list.map((item, idx) => (
                (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()))
                ? <ItemCard {...item} index={content_count-idx-1}></ItemCard>
                : null // 삼향 연산자로 if 없이 검색 필터 구현
            )
        )}
        </div>
    );
});

export type ListHandle = { setSearch: (v: string) => void };
export { List_Page };