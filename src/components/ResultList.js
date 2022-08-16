import React, {useState, useEffect} from 'react'
import { URL, API_KEY, URL_AUTHORS } from '../utils/constants';
import axios from 'axios';
import ResultsView from '../views/ResultsView';


const NewsList = () => {
  const [totalResults, setTotalResults] = useState([]);
  const [totalAuthors, setTotalAuthors] = useState([]);
  console.log(totalResults);
  
  useEffect (() => {
    const getTotalAuthors = async () => {
    const res = await axios.get(URL_AUTHORS+API_KEY);
    console.log(res);
    setTotalAuthors(res.data.totalResults);
    }
    getTotalAuthors();
  }, [])

  useEffect(() => {
    const getTotalResults = async () => {
    const response = await axios.get(URL+API_KEY);
      setTotalResults(response.data.totalResults);
    }
    getTotalResults();
  }, [])
  return (
    <div>
        <ResultsView
          totalResults={ totalResults }
          totalAuthors={ totalAuthors }
        />
        
    </div>
  )
}

export default NewsList;