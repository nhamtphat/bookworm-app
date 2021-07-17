import React, {Component} from 'react';
import {Accordion, Card, Button} from "react-bootstrap";

function FilterGroup (props) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Title} variant="link" eventKey={props.eventKey}>
                    {props.title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>
                    {props.data.map((item) => (
                        <label className="custom-control custom-radio" key={item.id}>
                            <input type="radio" name="myfilter_radio" className="custom-control-input" value={item.id} onChange={() => props.onChange(props.eventKey, item.id)}/>
                            <div className="custom-control-label">{item.name}</div>
                        </label>
                    ))}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default FilterGroup;