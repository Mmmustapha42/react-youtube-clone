import React from 'react'
import { Box} from '@mui/material'

export const ChannelCard = ({channelDetail:{videoId,channelId, channelTitle, publishedText, title, description, thumbnail, channelThumbnail}}) => {
  return (
    <Box sx={{boxShadow:"none", borderRadius: '20px'}}>
    {/*<Link to={`/channel/${channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color: '#fff'}}>
               {<CardMedia image={demoProfilePicture} alt={title} sx={{borderRadius:'50%', height: '180px', width:'180px'}}></CardMedia>
            </CardContent>
  </Link>*/}
    </Box>
  )
}
