import stars_active from "../../assets/images/icons/stars-active.svg";
import stars_disable from "../../assets/images/icons/stars-disable.svg";
import React from "react";

function toDateString(string) {
    let date = new Date(string)
    return date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric"
    })
}

export default function ReviewItem(props) {
    const {review_date, review_title, review_details, rating_start} = props.review;

    return (
        <article className="box mb-3 border-0 border-top">
            <div className="icontext w-100">
                <div className="text">
                    <span className="date text-muted float-md-right">{ toDateString(review_date) }</span>
                    <h5>{review_title}</h5>
                    <ul className="rating-stars">
                        <li style={{width: (rating_start*20) + "%"}} className="stars-active">
                            <img src={stars_active} alt="" />
                        </li>
                        <li>
                            <img src={stars_disable} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-3">
                <p>{review_details}</p>
            </div>
        </article>
    )
}