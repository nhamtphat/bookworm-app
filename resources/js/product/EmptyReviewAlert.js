import { Alert } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyReviewAlert(props) {
  return (
    <Alert variant="warning">
      Reviews is empty! <Link to="#">Write a review</Link>
    </Alert>
  )
}
