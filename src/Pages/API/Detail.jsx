import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../../../node_modules/axios/dist/axios.js'
import Spinner from "../../Component/Spinner/Spinner.jsx"
import Jumbotron from "../../Component/Jumbotron/Jumbotron.jsx"

const Detail = () => {

    const history = useHistory()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false);
    const [data, setData] = useState (null)
    // cosnt [data, setData] = useState()

    const fetchData = async () => {
        setIsLoading(true)
        setError(false)
        await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`).then((respone) => {
            console.log(respone)
            setIsLoading(false)
            setError(false)
            setData(respone.data)
        }).catch((error) => {
            console.log(error)
            setData(null)
            setError(true)
        });
    }

    const back = () => {
        history.replace("/api")
    }

    useEffect(() => {
        fetchData()
    }, [id])

    let spinner = !isLoading ? null : (
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );
    let errorMessage = !error ? null : (
      <div style={{ textAlign: "center" }}>uknown an error</div>
    );
    let showData = !data ? null : (
      <div className="pt-3" style={{ textAlign: "center" }}>
        <Jumbotron dataDetail={data} />
      </div>
    );

    return (
      <div>
        <button className="btn btn-secondary mt-3" onClick={back}>
          Back
        </button>
        <h1 className="mt-2">This is Detail</h1>
        {spinner}
        {errorMessage}
        {showData}
      </div>
    );
}

export default Detail