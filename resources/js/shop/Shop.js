import React, {useEffect, useRef, useState} from 'react';
import Layout from "../layouts";
import BookGridFigure from "../common/BookGridFigure";
import BookListFigure from "../common/BookListFigure";
import Pagination from "../common/Pagination"
import FilterGroup from "./FilterGroup";
import axios from "axios";
import {Helmet} from "react-helmet";
import {Accordion} from "react-bootstrap";

export default function Shop (props) {
    const [view, setView] = useState("grid")
    const [sortBy, setSortBy] = useState('on_sale')
    const [filter, setFilter] = useState({filterBy: "", filterValue: 0, filterByTitle: "", filterValueName: ""})
    const [allFilters, setAllFilters] = useState([])
    const [perPage, setPerPage] = useState(20)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [meta, setMeta] = useState({})

    const sortMode = useRef([
        {mode: 'onsale', name:"Sort by on sale" },
        {mode: 'popularity', name:"Sort by popularity" },
        {mode: 'asc_price', name:"Sort by price: low to high" },
        {mode: 'desc_price', name:"Sort by price: high to low" }
    ]);

    const perPageMode = useRef([
        {mode: 5, name:"Show 5" },
        {mode: 15, name:"Show 15" },
        {mode: 20, name:"Show 20" },
        {mode: 25, name:"Show 25" }
    ]);

    useEffect(() => {
        axios.get("/api/filters")
            .then(response => {
                setAllFilters(response.data)
            })
    }, [])

    useEffect(() => {
        fetchData()
    }, [page, sortBy, perPage, filter])

    function fetchData() {
        const config = {
            params: {
                per_page: perPage,
                page: page,
                sort_by: sortBy,
                filter_by: filter.filterBy,
                filter_value: filter.filterValue
            }
        }
        axios.get("/api/shop", config)
            .then(response => {
                setData(response.data.data)
                setMeta(response.data.meta)
            })
    }

    function changeSortBy(event) {
        setSortBy(event.target.value);
    }

    function changePerPage(event) {
        setPerPage(event.target.value);
    }

    function changeFilter(filter, filterData) {
        setFilter({
            filterBy: filter.query_key,
            filterValue: filterData.value,
            filterByTitle: filter.title,
            filterValueName: filterData.name
        })
    }

    return (
        <Layout>
            <Helmet>
                <title>Bookworm Shop</title>
            </Helmet>
            <section className="section-content bg padding-y pt-0">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="border-bottom p-3">Books
                                {(filter.filterByTitle != "")
                                    ? <span className="sub-text ml-2">(Filterd by {filter.filterByTitle} #{filter.filterValueName})</span>
                                    : ""
                                }
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <aside className="col-md-3">
                            <Accordion defaultActiveKey="category_id">
                                {allFilters.map((filter) => (
                                    <FilterGroup key={filter.query_key} filter={filter} onChange={changeFilter} />
                                ))}
                            </Accordion>
                        </aside>
                        <main className="col-md-9">
                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">{`Showing ${meta.from} - ${meta.to} of ${meta.total} book`} </span>
                                    <select className="mr-2 form-control" onChange={changeSortBy} defaultValue={sortBy}>
                                        {sortMode.current.map((mode) => (
                                            <option key={mode.mode} value={mode.mode}>{mode.name}</option>
                                        ))}
                                    </select>
                                    <select className="mr-2 form-control" onChange={changePerPage} defaultValue={perPage}>
                                        {perPageMode.current.map((mode) => (
                                            <option key={mode.mode} value={mode.mode}>{mode.name}</option>
                                        ))}
                                    </select>
                                    <div className="btn-group">
                                        <button
                                            className={`btn btn-outline-secondary ${(view === "list")? 'active' : ""}`}
                                            onClick={() => setView("list")}
                                            title="List view">
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        <button
                                            className={`btn btn-outline-secondary ${(view === "grid")? 'active' : ""}`}
                                            onClick={() => setView("grid")}
                                            title="Grid view">
                                            <i className="fa fa-th"></i>
                                        </button>
                                    </div>
                                </div>
                            </header>

                            <div className="row">
                                {data.map(book => (
                                    (view === "grid")
                                        ?
                                        <div key={book.id} className="col-md-3"><BookGridFigure book={book}/></div>
                                        :
                                        <div key={book.id} className="col-md-12"><BookListFigure book={book}/></div>
                                ))}
                            </div>

                            <Pagination className="text-center" page_count={meta.last_page} current_page={page} setPage={setPage}/>
                        </main>
                    </div>
                </div>
            </section>
        </Layout>
    );
}