import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack } from '@mui/material'


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)

  const {id} = useParams()

  useEffect(()=> {
    const url = `https://youtube-v3-alternative.p.rapidapi.com/video?id=${id}`;
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a6bc9614c4mshc145c549c933bf7p1c6bcejsnd336c5a0fdc6',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then((data) => setVideoDetail(data.items[0]))
      .catch(err => console.error('error:' + err));
      
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            <ReactPlayer url={`https://wwww.youtube.com/watch?v=${id}`} className='react-player' controls/>

          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
