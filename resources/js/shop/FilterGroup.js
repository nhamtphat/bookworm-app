import React, {Component} from 'react';
import {Accordion, Card, Button} from "react-bootstrap";

function FilterGroup (props) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Title} variant="link" eventKey={props.filter.query_key}>
                    {props.filter.title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.filter.query_key}>
                <Card.Body>
                    {props.filter.data.map((item) => (
                        <label className="custom-control custom-radio" key={item.value}>
                            <input type="radio" name="myfilter_radio" className="custom-control-input" value={item.value} onChange={() => props.onChange(props.filter, item)}/>
                            <div className="custom-control-label">{item.name}</div>
                        </label>
                    ))}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default FilterGroup;