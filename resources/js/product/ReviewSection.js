import ReviewItem from './ReviewItem'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import '../../css/ReviewSection.css'
import Pagination from '../common/Pagination'
import EmptyReviewAlert from './EmptyReviewAlert'
import ReviewForm from './ReviewForm'

const initFilter = {
  filterValue: '',
  filterValueName: '',
}

export default function ReviewSection({ book, fetchBook }) {
  const [reviews, setReviews] = useState([])
  const [sortBy, setSortBy] = useState('newest_first')
  const [currentFilter, setFilter] = useState(initFilter)
  const [allFilters, setAllFilters] = useState([])
  const [perPage, setPerPage] = useState(20)
  const [page, setPage] = useState(1)
  const [meta, setMeta] = useState({})

  const sortMode = useRef([
    { mode: 'newest_first', name: 'Sort by date: newest to oldest' },
    { mode: 'oldest_first', name: 'Sort by date: oldest to newest' },
  ])

  const perPageMode = useRef([
    { mode: 5, name: 'Show 5' },
    { mode: 15, name: 'Show 15' },
    { mode: 20, name: 'Show 20' },
    { mode: 25, name: 'Show 25' },
  ])

  useEffect(() => {
    fetchData()
  }, [book, sortBy, perPage, page, currentFilter])

  function fetchData() {
    if (book.id === undefined) return

    const config = {
      params: {
        per_page: perPage,
        page: page,
        sort_by: sortBy,
        filter_value: currentFilter.filterValue,
      },
    }

    axios.get(`/api/books/${book.id}/reviews`, config).then((response) => {
      setReviews(response.data.data)
      setMeta(response.data.meta)
    })

    axios.get(`/api/books/${book.id}/reviews/filters`).then((response) => {
      setAllFilters(response.data[0].data)
    })
  }

  function getBook() {
    fetchBook()
    fetchData()
  }

  function changeSortBy(event) {
    setPage(1)
    setSortBy(event.target.value)
  }

  function changePerPage(event) {
    setPage(1)
    setPerPage(event.target.value)
  }

  function changeFilter(filterData) {
    setPage(1)
    if (currentFilter.filterValue == filterData.value) {
      setFilter(initFilter)
      return
    }
    setFilter({
      filterValue: filterData.value,
      filterValueName: filterData.name,
    })
  }

  function getFilterName() {
    return currentFilter.filterValueName.substring(0, 6)
  }

  return (
    <div className="row mt-4">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <header className="p-2">
              <div className="">
                <h5>
                  Customer Reviews
                  {currentFilter.filterValueName != '' ? (
                    <span className="sub-text ml-2">
                      (Filterd by {getFilterName()})
                    </span>
                  ) : null}
                </h5>
                <div className="d-block my-2">
                  <h2>{book.avg_star} Star</h2>
                  {allFilters.map((filter, index) => (
                    <span
                      key={index}
                      className={
                        'filter-item ' +
                        (index == 0 ? 'first ' : '') +
                        (currentFilter.filterValue == filter.value
                          ? 'font-weight-bold '
                          : '')
                      }
                      onClick={() => changeFilter(filter)}
                    >
                      {filter.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-inline shop-meta">
                <span className="mr-md-auto">
                  {`Showing ${meta.from} - ${meta.to} of ${meta.total} reviews`}{' '}
                </span>
                <select
                  className="mr-md-2 form-control"
                  onChange={changeSortBy}
                  defaultValue={sortBy}
                >
                  {sortMode.current.map((mode, index) => (
                    <option key={index} value={mode.mode}>
                      {mode.name}
                    </option>
                  ))}
                </select>
                <select
                  className="form-control"
                  onChange={changePerPage}
                  defaultValue={perPage}
                >
                  {perPageMode.current.map((mode, index) => (
                    <option key={index} value={mode.mode}>
                      {mode.name}
                    </option>
                  ))}
                </select>
              </div>
            </header>
          </div>
          <div className="card-body">
            {reviews.length == 0 ? <EmptyReviewAlert /> : null}

            <div className={reviews.length == 0 ? 'd-none' : ''}>
              {reviews.map((review, index) => (
                <div key={index}>
                  <ReviewItem review={review} />
                  <hr className="review-sep" />
                </div>
              ))}

              <Pagination
                className="text-center"
                page_count={meta.last_page}
                current_page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3 mt-md-0">
        <ReviewForm book={book} fetchData={getBook} />
      </div>
    </div>
  )
}
