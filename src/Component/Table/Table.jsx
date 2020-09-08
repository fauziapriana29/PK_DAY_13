import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const Table = (props) => {

    console.log(props)
  const { data } = props
  const { url} = useRouteMatch()
    const MapData = data.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
                <td>{data.title}</td>
            <td>{data.producer}</td>
            <td>{data.director}</td>
            <td><Link className="btn btn-secondary" to={`${url}/detail/${data.id}`}>See Detail</Link></td>
          </tr>
        );
    })
    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Producer</th>
              <th scope="col">Director</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {MapData}
          </tbody>
        </table>
      </div>
    );
}

export default Table