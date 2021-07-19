import {Alert} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export default function EmptyCartAlert (props) {
    return (
        <tr className="border-top">
            <td colSpan="4">
                <Alert variant="warning">
                    Your cart is empty! <Link to="/shop">Continue shopping</Link>
                </Alert>
            </td>
        </tr>
    )
}