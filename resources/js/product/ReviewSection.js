import ReviewItem from "./ReviewItem";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import "./ReviewSection.css"
import Pagination from "../common/Pagination";
import EmptyReviewAlert from "./EmptyReviewAlert";

export default function ReviewSection ({book}) {
    const [reviews, setReviews] = useState([]);
    const [sortBy, setSortBy] = useState('newest_first')
    const [filter, setFilter] = useState({filterValue: "", filterValueName: ""})
    const [allFilters, setAllFilters] = useState([])
    const [perPage, setPerPage] = useState(20)
    const [page, setPage] = useState(1)
    const [meta, setMeta] = useState({})

    const sortMode = useRef([
        {mode: 'newest_first', name: "Sort by date: newest to oldest" },
        {mode: 'oldest_first', name: "Sort by date: oldest to newest" }
    ]);

    const perPageMode = useRef([
        {mode: 5, name:"Show 5" },
        {mode: 15, name:"Show 15" },
        {mode: 20, name:"Show 20" },
        {mode: 25, name:"Show 25" }
    ]);

    useEffect(() => {
        fetchData()
    }, [book, sortBy, perPage, page, filter])

    function fetchData() {
        if(book.id === undefined) return;
        const config = {
            params: {
                per_page: perPage,
                page: page,
                sort_by: sortBy,
                filter_value: filter.filterValue
            }
        }

        axios.get(`/api/books/${book.id}/reviews`, config)
            .then(response => {
                setReviews(response.data.data)
                setMeta(response.data.meta)
            })

        axios.get(`/api/books/${book.id}/reviews/filters`)
            .then(response => {
                setAllFilters(response.data[0].data)
            })
    }

    function changeSortBy(event) {
        setSortBy(event.target.value);
    }

    function changePerPage(event) {
        setPerPage(event.target.value);
    }

    function changeFilter(filterData) {
        setPage(1)
        setFilter({
            filterValue: filterData.value,
            filterValueName: filterData.name
        })
    }

    return (
        <section className="section-review bg padding-y">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <header className="p-2">
                                    <div className="">
                                        <h5>Customer Reviews
                                            {(filter.filterValueName != "")
                                                ? <span className="sub-text ml-2">(Filterd by {filter.filterValueName})</span>
                                                : ""
                                            }
                                        </h5>
                                        <div className="d-block my-2">
                                            <h2>{book.avg_star} Star</h2>
                                            {allFilters.map((filter, index) => (
                                                <span key={index} className={`filter-item ${(index == 0)? "first" : ""} `} onClick={() => changeFilter(filter)}>
                                                    { filter.name }
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-inline">
                                        <span className="mr-md-auto">{reviews.length} reviews found </span>
                                        <select className="mr-2 form-control" onChange={changeSortBy} defaultValue={sortBy}>
                                            {sortMode.current.map((mode) => (
                                                <option key={mode.mode} value={mode.mode}>{mode.name}</option>
                                            ))}
                                        </select>
                                        <select className="form-control" onChange={changePerPage} defaultValue={perPage}>
                                            {perPageMode.current.map((mode) => (
                                                <option key={mode.mode} value={mode.mode}>{mode.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </header>
                            </div>
                            <div className="card-body">
                                {(reviews.length == 0)
                                    ? <EmptyReviewAlert />
                                    : <div>
                                        {reviews.map((review, index) => (
                                            <ReviewItem key={index} review={review} />
                                        ))}

                                        <Pagination className="text-center" page_count={meta.last_page} current_page={page} setPage={setPage}/>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Write a review</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Add a title</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Details please! Your review helps other shoppers.</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Select a rating star?</label>
                                        <select className="form-control">
                                            {[1,2,3,4,5].map(star => (
                                                <option key={star} value={star}>{star} Star</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button className="btn btn-primary btn-block">Submit review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}