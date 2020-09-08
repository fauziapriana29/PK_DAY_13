import React, { useState, useEffect } from 'react'
import axios from '../../../node_modules/axios/dist/axios.js'
import Table from '../../Component/Table/Table.jsx'

const Api = () => {

    const [film, setfilm] = useState([])
        const fetchApi = () => {axios
          .get("https://ghibliapi.herokuapp.com/films")
          .then((respone) => {
            console.log(respone.data)
            setfilm(respone.data);
          })
          .catch((error) => {
            console.log(error);
          });}
    useEffect(() => {
        // fetchApi()
    }, [])

    return (
        <div>
            <h1>API Page</h1>
            <br/>
            <button className='btn btn-primary' onClick={fetchApi}>Fetch Data</button>
            <br/><br/>
            <Table data={film}/>
        </div>
    )
}

export default Api