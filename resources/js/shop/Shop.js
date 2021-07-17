import React, {useEffect, useRef, useState} from 'react';
import Layout from "../layouts";
import BookGridFigure from "../common/BookGridFigure";
import BookListFigure from "../common/BookListFigure";
import CustomPagination from "../common/CustomPagination"
import FilterGroup from "./FilterGroup";
import axios from "axios";
import {Helmet} from "react-helmet";
import {Accordion} from "react-bootstrap";

export default function Shop (props) {
    const [view, setView] = useState("grid")
    const [sortBy, setSortBy] = useState('on_sale')
    const [filter, setFilter] = useState({filterBy: "", filterValue: 0})
    const [perPage, setPerPage] = useState(20)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [meta, setMeta] = useState({})
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [rating, setRating] = useState([]);

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

    const starFilter = useRef([
        {value: 1, name:"1 star" },
        {value: 2, name:"2 star" },
        {value: 3, name:"3 star" },
        {value: 4, name:"4 star" },
        {value: 5, name:"5 star" }
    ]);

    useEffect(() => {
        axios.get("/api/filters")
            .then(response => {
                setCategories(response.data.categories)
                setAuthors(response.data.authors)
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

    function changeFilter(filter, value) {
        setFilter({
            filterBy: filter,
            filterValue: value
        })
    }

    return (
        <Layout>
            <Helmet>
                <title>Bookworm Shop</title>
            </Helmet>
            <section className="section-content bg padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <Accordion defaultActiveKey="category_id">
                                <FilterGroup title="Category" eventKey="category_id" data={categories} onChange={changeFilter} />
                                <FilterGroup title="Author" eventKey="author_id" data={authors} onChange={changeFilter} />
                                <FilterGroup title="Star" eventKey="star" data={starFilter.current} onChange={changeFilter} />
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

                            <CustomPagination page_count={meta.last_page} current_page={page} setPage={setPage}/>
                        </main>
                    </div>
                </div>
            </section>
        </Layout>
    );
}