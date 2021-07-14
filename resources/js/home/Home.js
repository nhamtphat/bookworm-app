import React, {Component} from 'react'
import Layout from "../layouts";
import BookGridFigure from "../common/BookGridFigure";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {
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
                <section className="section-content bg padding-y">
                    <div className="container">
                        <h4>Slick slider items</h4>
                        <Slider {...settings}>
                        {this.state.books.map(book => (
                            <div key={book.id} className="item-slide p-2">
                                <BookGridFigure book={book} />
                            </div>
                        ))}
                        </Slider>

                        <h4 className="mt-5">Recommended Books</h4>
                        <div className="row">
                            {this.state.books.map(book => (
                                <div key={book.id} className="col-md-3">
                                    <div className="item-slide p-2">
                                        <BookGridFigure book={book} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4 className="mt-5">Popular books</h4>
                        <div className="row">
                            {this.state.books.map(book => (
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
        ]
    }
}
