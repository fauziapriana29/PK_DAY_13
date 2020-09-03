import React, { useState, useEffect } from 'react'
import axios from '../../../node_modules/axios/dist/axios.js'
import Table from '../../Component/Table/Table.jsx'

const Api = () => {

    const [starWar, setStarWar] = useState([])
        const fetchApi = () => {axios
          .get("https://swapi.dev/api/people/")
          .then((respone) => {
              console.log(respone.data.results);
              const data = respone.data.results
              setStarWar(data)
          })
          .catch((error) => {
            console.log(error);
          });}
    useEffect(() => {
        fetchApi()
    }, [])
    
    return (
        <div>
            <h1>API Page</h1>
            {/* <button className='btn btn-primary' onClick={fetchApi}>Fetch</button> */}
            <Table starWar={starWar}/>
        </div>
    )
}

export default Api