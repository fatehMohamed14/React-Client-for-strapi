import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Post from '../components/Post'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const getRequestParams = (start) => {
  console.log(start)
  let params = {};
  params["_start"] = (start-1)*2;
  params["_limit"] = 2;
  return params;
};

export default () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = React.useState(1);
  const classes = useStyles();
  useEffect(
    () => {
      const params = getRequestParams(page);
      const getPosts = async () => {
        const response = await API.get('/articles', { params });
        console.log(response)
        setPosts(response.data)
      }
      getPosts();

    }, [page]
  )
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Grid container justify="center" className={classes.root} spacing={2} >

      {posts.map(post => <Grid item key={post.id}  ><Post className={classes.paper} url={post.thumbnail && post.thumbnail.url} title={post.title} likes={post.likes} description={post.content} /></Grid>)}
      <Grid container justify="center" >
        <Box m="5rem">
          <Pagination count={5} color="primary" page={page} onChange={handlePageChange} />
        </Box>
      </Grid>
    </Grid>
  );
}