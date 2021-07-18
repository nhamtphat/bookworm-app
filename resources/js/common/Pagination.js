import PaginationItem from "./PaginationItem";

export default function Pagination (props) {
    function setPage(number) {
        props.setPage(number);
    }

    function renderItem(page_count, current_page) {
        let items = [];
        for (let number = 1; number <= page_count; number++) {
            items.push(
                <PaginationItem active={number === current_page} page={number} text={number} setPage={props.setPage} />
            );
        }
        return items;
    }

    return (
        <nav className="mt-4">
            <ul className="pagination">

                <PaginationItem disabled={props.current_page === 1} page={props.current_page-1} text="Previous" setPage={props.setPage} />

                {renderItem(props.page_count, props.current_page)}

                <PaginationItem disabled={props.current_page === props.page_count} page={props.current_page+1} text="Next" setPage={props.setPage} />
            </ul>
        </nav>
    )
}