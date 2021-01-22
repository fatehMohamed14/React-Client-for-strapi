import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Post from '../components/Post'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Box from '@material-ui/core/Box';

const pageSize = 10;
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
  let params = {};
  params["_start"] = (start-1)*pageSize;
  params["_limit"] = pageSize;
  return params;
};

export default () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  useEffect(
    () => {
      const params = getRequestParams(page);
      const getPosts = async () => {
        const response = await API.get('/articles', { params });
        setPosts(response.data.items)
        setCount(response.data.count)
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
          <Pagination count={Math.ceil(count/pageSize)} color="primary" page={page} onChange={handlePageChange} />
        </Box>
      </Grid>
    </Grid>
  );
}