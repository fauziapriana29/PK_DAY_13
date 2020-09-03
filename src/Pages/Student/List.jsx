import React from 'react'

const List = () => {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Dapibus ac facilisis in</li>

          <li className="list-group-item list-group-item-primary">
            A simple primary list group item
          </li>
          <li className="list-group-item list-group-item-secondary">
            A simple secondary list group item
          </li>
          <li className="list-group-item list-group-item-success">
            A simple success list group item
          </li>
          <li className="list-group-item list-group-item-danger">
            A simple danger list group item
          </li>
          <li className="list-group-item list-group-item-warning">
            A simple warning list group item
          </li>
          <li className="list-group-item list-group-item-info">
            A simple info list group item
          </li>
          <li className="list-group-item list-group-item-light">
            A simple light list group item
          </li>
          <li className="list-group-item list-group-item-dark">
            A simple dark list group item
          </li>
        </ul>
      </div>
    );
}

export default List