import React, {Component} from 'react'
import Layout from "../layouts";
import BookGridFigure from "../common/BookGridFigure";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {Helmet} from "react-helmet";

export default class Home extends Component {
    state = {
        onsale_books: [],
        recommended_books: [],
        popular_books: [],
    }

    componentWillMount() {
        axios.get("/api/homepage")
            .then(response => {
                this.setState({
                    onsale_books: response.data.onsale_books,
                    recommended_books: response.data.recommended_books,
                    popular_books: response.data.popular_books
                })
            });
    }

    render() {
        const settings = {
            infinite: true,
            swipeToSlide: true,
            slidesToShow: 4,
            dots: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };

        return (
            <Layout>
                <Helmet>
                    <title>Bookworm Homepage</title>
                </Helmet>
                <section className="section-content bg padding-y">
                    <div className="container">
                        <h4>Slick slider items</h4>
                        <Slider {...settings}>
                        {this.state.onsale_books.map(book => (
                            <div key={book.id} className="item-slide p-2">
                                <BookGridFigure book={book} />
                            </div>
                        ))}
                        </Slider>

                        <h4 className="mt-5">Recommended Books</h4>
                        <div className="row">
                            {this.state.recommended_books.map(book => (
                                <div key={book.id} className="col-md-3">
                                    <div className="item-slide p-2">
                                        <BookGridFigure book={book} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4 className="mt-5">Popular books</h4>
                        <div className="row">
                            {this.state.popular_books.map(book => (
                                <div key={book.id} className="col-md-3">
                                    <div className="item-slide p-2">
                                        <BookGridFigure book={book} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
