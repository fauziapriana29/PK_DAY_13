import React from 'react'

const Table = (props) => {
    console.log(props)
    const { starWar } = props
    const MapData = starWar.map((data, index) => {
        return (
          <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.mass}</td>
            <td>{data.hair_color}</td>
            <td>{data.skin_color}</td>
          </tr>
        );
    })
    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
              <th scope="col">Hair Color</th>
              <th scope="col">Skin Color</th>
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