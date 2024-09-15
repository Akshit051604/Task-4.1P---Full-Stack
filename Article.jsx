import React from 'react'
import './article.css'
const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}

const Article = (props) => {
  return (
    <div className='container'>
      <div style={center}>
        <img className='thumbnail' src={props.thumbnail} alt="Thumbnail" />
      </div>
      <div className="title" style={center}>
        <h3>{props.title}</h3>
      </div>
      <div className="description-c" style={center}>
        <p className="description">{props.description}</p>
      </div>
      <div className="author" style={center}>
        <p><b>{props.rating} <img src='/public/images/Mario_star.png' className='star' alt='star'></img> {props.author}</b></p>
      </div>
    </div>
  )
}

export default Article;