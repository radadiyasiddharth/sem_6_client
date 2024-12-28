import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({image}) => {
  return (
   
    <div className="blog-card">
        <div className="card-image">
            <img src={image} alt={image} className='img-fluid w-100' />
        </div>
        <div className="blog-content">
          <p className="date">1 desc, 2022</p>
          <h5 className="title">A beautiful sunday morning  renaiassance</h5>
          <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque laborum ut. Nemo, incidunt dolorum.</p>
          <Link to={"/blog/:id"} className='button'>Read More</Link>
        </div>
    </div>
  
  )
}

export default BlogCard
