import React, {useState, useEffect} from 'react'
import API from '../utils/API'
import Post from '../components/Post'

export default () => {

  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      const getPosts = async () => {
        const response = await API.get('/articles');
        setPosts(response.data)
      } 
      getPosts();

    }, []
  )

  return (
      <div className="container">
        {posts.map(post => <Post url={post.thumbnail && post.thumbnail.url} title={post.title} likes={post.likes} key={post.id} /> )}
      </div>
  );
}