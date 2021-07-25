import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function ReviewForm({ book, fetchData }) {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [ratingStart, setRatingStart] = useState(1)

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }
  function handleDetailsChange(event) {
    setDetails(event.target.value)
  }
  function handleRatingStarChange(event) {
    setRatingStart(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const params = {
      review_title: title,
      review_details: details,
      rating_start: ratingStart,
    }
    axios
      .post(`/api/books/${book.id}/reviews`, params)
      .then((response) => {
        fetchData()
        resetForm()
        toast.success('Your review has been submitted!!')
      })
      .catch(function (error) {
        toast.error('Error: ' + error.message)
      })
  }

  function resetForm() {
    setTitle('')
    setDetails('')
    setRatingStart(1)
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">Write a review</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-row">
            <div className="col form-group">
              <label>Add a title: <span className="text-danger">*</span></label>
              <input
                type="text"
                className="form-control"
                maxLength="120"
                value={title}
                required={true}
                onChange={(e) => handleTitleChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Details please! Your review helps other shoppers.</label>
            <textarea
              className="form-control"
              rows="3"
              value={details}
              onChange={(e) => handleDetailsChange(e)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Select a rating star: <span className="text-danger">*</span></label>
            <select
              className="form-control"
              value={ratingStart}
              onChange={(e) => handleRatingStarChange(e)}
              required={true}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary btn-block">Submit review</button>
        </form>
      </div>
    </div>
  )
}
