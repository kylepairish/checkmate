import { CollectionsProps } from "../interfaces";

const Collections = ({ collection, setSearchQuery }: CollectionsProps) => {
    const handleClick = (query: string) => {
        setSearchQuery(query);
    };
    return (
        <div className="sidebar">
            <h2>History</h2>
            <ul>
                {collection.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(item.query)}>{item.query}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Collections;