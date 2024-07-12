import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavouriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import logo from '../logo.svg'
import { FavoriteBorder } from "@mui/icons-material"
const Post = () => {
  return (
         
    <Card   sx={{margin:5}} >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="250"
      image="https://www.pexels.com/photo/girl-posing-leaning-on-windowsill-10125613/"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<FavouriteIcon  sx={{color:"red"}}/>} />        </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      
    </CardActions>
    
  </Card>
  )
}

export default Post
