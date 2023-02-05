import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constant'

export const VideoCard = ({video: {videoId,channelId, channelTitle, publishedText, title, description, thumbnail}}) => {

  return (
    //console.log(videoId, channelId, channelTitle, publishedText, description, title)
    <Card sx={{width:{xs:'100%',sm:'358px', md:'320px'}, boxShadow: 'none', borderRadius:'0'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={thumbnail?.[0].url} alt={title} sx={{width:{xs:'100%', sm: '358px', md:'320px'}, height:180}}/>
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                    {title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='#gray'>
                    {channelTitle?.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                    <CheckCircle sx={{fontSize:12, color:"gray", ml:'5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}
