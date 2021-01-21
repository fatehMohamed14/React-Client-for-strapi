import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Post.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const API_URL = 'http://localhost:1337';
const formatImageUrl = (url) => `${API_URL}${url}`;


export default ({ title, url, likes, description }) => {
  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="article thumbnail"
          height="200"
          image={formatImageUrl(url)}
          title={title}
        />
        <CardContent >
          <Box height="100px">
             <Typography   gutterBottom variant="h5" component="h4">
            {title} 
          </Typography>
          </Box>
          <Box>
            <Typography  gutterBottom noWrap  variant="body2" color="textSecondary" component="p" noWrap >
            {description}
          </Typography>
          </Box>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
         <IconButton aria-label="add to favorites" color="secondary">
          <FavoriteIcon /> 
        </IconButton>
         <Typography color="secondary">
            +{likes}
          </Typography>
      </CardActions>
    </Card>

  )
}
