import {Link, useHistory} from "react-router-dom";
import React, {useEffect} from "react";

export default function CartThankYou(props) {
    const history = useHistory()

    const TimeToRedirect = 10000;

    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, TimeToRedirect)
    }, []);

    return (
        <section className="section-content bg padding-y pt-0">
            <div className="container">
                <div className="row" style={{ padding: "10rem 0px"}}>
                    <div className="col-12 text-center">
                        <h1 className="display-3">Thank You!</h1>
                        <p className="lead">
                            <strong>Please check your email</strong> for further instructions on how to complete your order.
                        </p>
                        <hr />
                        <p>
                            Having trouble? <Link to="/about">Contact us</Link>
                        </p>
                        <p className="lead">
                            <Link className="btn btn-primary" to="/shop" role="button">Continue shopping</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}