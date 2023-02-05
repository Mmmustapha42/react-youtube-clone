import React,{useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
//import { fetchFromApi } from '../utils/fetchFromApi'




const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    //fetchFromApi(`search?query=${selectedCategory}`)
    //.then((data) => setVideos(data.items))

    
const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${selectedCategory}&geo=US&lang=en`;

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
  }, [selectedCategory]);

  return (

    <Stack sx={{flexDirection: {sx:'column', md:'row'}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
          Copyright 2022 JSM MEDIA
        </Typography>
      </Box>


      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: "white" }}>
          {selectedCategory}
          <span style={{color: '#f31503'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
} 
export default Feed
