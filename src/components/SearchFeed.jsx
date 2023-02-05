import React,{useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import { useParams } from 'react-router-dom'

import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
//import { fetchFromApi } from '../utils/fetchFromApi'




const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(()=> {
    //fetchFromApi(`search?query=${selectedCategory}`)
    //.then((data) => setVideos(data.items))

    
const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchTerm}&geo=US&lang=en`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a6bc9614c4mshc145c549c933bf7p1c6bcejsnd336c5a0fdc6',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then((response) => setVideos(response.data))
	.catch(err => console.error('error:' + err));
  }, [searchTerm]);

  return (

    <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: "white" }}>
          search results for:
          <span style={{color: '#f31503'}}>{searchTerm}</span> Videos
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
} 
export default SearchFeed
