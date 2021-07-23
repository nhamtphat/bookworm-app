import PaginationItem from './PaginationItem'
import './Pagination.css'

export default function Pagination(props) {
  const MAX_PREV = 3
  const MAX_NEXT = 3
  const MAX_LENGTH = MAX_PREV + MAX_NEXT

  function renderPages(page_count, current_page) {
    let start = 1
    let stop = page_count
    let items = []

    if (page_count > MAX_LENGTH) {
      start = current_page - MAX_PREV
      stop = current_page + MAX_NEXT

      if (start < 1) {
        stop += 1 - start
        start = 1
      }

      if (stop > page_count) {
        start += page_count - stop
        stop = page_count
      }
    }


    for (let number = start; number <= stop; number++) {
      items.push(
        <PaginationItem
          key={number}
          active={number === current_page}
          page={number}
          text={number}
          setPage={props.setPage}
        />,
      )
    }
    return items
  }

  return props.page_count > 1 ? (
    <nav className="mt-4">
      <ul className="pagination">
        <PaginationItem
          disabled={props.current_page === 1}
          page={props.current_page - 1}
          text="Previous"
          setPage={props.setPage}
        />

        {renderPages(props.page_count, props.current_page)}

        <PaginationItem
          disabled={props.current_page === props.page_count}
          page={props.current_page + 1}
          text="Next"
          setPage={props.setPage}
        />
      </ul>
    </nav>
  ) : null
}
