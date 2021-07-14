import React, {Component} from 'react';
import Layout from "../layouts";
import BookGridFigure from "../common/BookGridFigure";
import BookListFigure from "../common/BookListFigure";
import FilterGroup from "./FilterGroup";

export default class Shop extends Component {
    state = {
        books: [
            {
                id: 1,
                name: "Test book A",
                price: 14.3
            },
            {
                id: 2,
                name: "Test book B",
                price: 54.3
            },
            {
                id: 3,
                name: "Test book C",
                price: 54.3
            },
            {
                id: 4,
                name: "Test book D",
                price: 54.3
            },
            {
                id: 5,
                name: "Test book E",
                price: 54.3
            },
            {
                id: 6,
                name: "Test book F",
                price: 54.3
            },
            {
                id: 7,
                name: "Test book G",
                price: 54.3
            },
            {
                id: 8,
                name: "Test book H",
                price: 54.3
            },
        ],
        grid_view: true
    }

    setView = (view) => {
        let mode = (view==="grid")
        this.setState({grid_view: mode})
    }

    render() {
        return (
            <Layout>
                <section className="section-content bg padding-y">
                    <div className="container">
                        <div className="row">
                            <aside className="col-md-3">
                                <div className="card">
                                    <FilterGroup />
                                </div>
                            </aside>
                            <main className="col-md-9">
                                <header className="border-bottom mb-4 pb-3">
                                    <div className="form-inline">
                                        <span className="mr-md-auto">32 Items found </span>
                                        <select className="mr-2 form-control">
                                            <option>Latest items</option>
                                            <option>Trending</option>
                                            <option>Most Popular</option>
                                            <option>Cheapest</option>
                                        </select>
                                        <div className="btn-group">
                                            <button
                                               className={`btn btn-outline-secondary ${(! this.state.grid_view)? 'active' : ""}`}
                                               onClick={() => this.setView("list")}
                                               title="List view">
                                                <i className="fa fa-bars"></i>
                                            </button>
                                            <button
                                               className={`btn btn-outline-secondary ${this.state.grid_view? 'active' : ""}`}
                                               onClick={() => this.setView("grid")}
                                               title="Grid view">
                                                <i className="fa fa-th"></i>
                                            </button>
                                        </div>
                                    </div>
                                </header>

                                <div className="row">
                                    {this.state.books.map(book => (
                                        (this.state.grid_view)
                                            ? <div key={book.id} className="col-md-3"> <BookGridFigure book={book} /> </div>
                                            : <div key={book.id} className="col-md-12"> <BookListFigure book={book} /> </div>
                                    ))}
                                </div>

                                <nav className="mt-4" aria-label="Page navigation sample">
                                    <ul className="pagination">
                                        <li className="page-item disabled"><a className="page-link" href="#">Previous</a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>

                            </main>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}