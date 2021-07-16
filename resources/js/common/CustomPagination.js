import {Pagination} from "react-bootstrap";

export default function CustomPagination (props) {
    function setPage(number) {
        props.setPage(number);
    }

    function renderItem(page_count, current_page) {
        let items = [];
        for (let number = 1; number <= page_count; number++) {
            items.push(
                <li className={`page-item ${(number === current_page)? "active" : ""}`} key={number}>
                    <a className="page-link" onClick={() => setPage(number)}>{number}</a>
                </li>
            );
        }
        return items;
    }

    return (
        <nav className="mt-4" aria-label="Page navigation sample">
            <ul className="pagination">
                {renderItem(props.page_count, props.current_page)}
            </ul>
        </nav>
    )
}