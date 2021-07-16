import React, {useEffect, useState} from 'react';
import Layout from "../layouts";
import BookGridFigure from "../common/BookGridFigure";
import BookListFigure from "../common/BookListFigure";
import CustomPagination from "../common/CustomPagination"
import FilterGroup from "./FilterGroup";
import axios from "axios";
import {Helmet} from "react-helmet";
import {useLocation} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Shop (props) {
    let query = useQuery();

    const [view, setView] = useState("grid")
    const [order, setOrder] = useState('desc')
    const [by, setBy] = useState('created_at')
    const [perPage, setPerPage] = useState(20)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [meta, setMeta] = useState({})

    useEffect(() => {
        fetchData()
    }, [page])

    function fetchData() {
        const config = {
            params: {
                per_page: perPage,
                page: page,
                order: order,
                by: by
            }
        }
        axios.get("/api/shop", config)
            .then(response => {
                setData(response.data.data)
                setMeta(response.data.meta)
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
                            <div className="card">
                                <FilterGroup/>
                            </div>
                        </aside>
                        <main className="col-md-9">
                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">{`Showing ${meta.from} - ${meta.to} of ${meta.total} book`} </span>
                                    <select className="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option>Cheapest</option>
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