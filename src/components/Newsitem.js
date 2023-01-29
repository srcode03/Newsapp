import React from 'react'

const Newsitem=(props)=> {
  
    let {title,description,imgurl,newsurl,author,publishedAt,source}=props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imgurl} className="card-img-top" alt="..." />
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?'xyz':author} on {new Date(publishedAt).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default Newsitem
