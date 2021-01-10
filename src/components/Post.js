import react from 'react'
import './Post.css'

const API_URL = 'http://localhost:1337';
const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({title, url, likes}) => {

  return (
  <div className="Post">
    <div className="img-container">
    <span className="likes">❤️ {likes} </span>
    </div>
    <img src={formatImageUrl(url)}  className="thumbnail" />
    <h3>{title}</h3>
  </div>
  )
}
