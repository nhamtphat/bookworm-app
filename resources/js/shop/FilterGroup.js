import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

function FilterGroup({ filter, currentFilter, onChange }) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Card.Title}
          variant="link"
          eventKey={filter.query_key}
        >
          {filter.title}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={filter.query_key}>
        <Card.Body>
          {filter.data.map((item) => (
            <p
              style={{
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
              className={
                currentFilter.filterValue === item.value &&
                currentFilter.filterBy === filter.query_key
                  ? 'font-weight-bold'
                  : null
              }
              onClick={() => onChange(filter, item)}
            >
              {item.name}
            </p>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default FilterGroup
