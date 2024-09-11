import React from 'react'


const Newsitem=(props)=> {
 
  
    let {title,description,imageUrl,newsUrl,date,author,source}=props;
    return (
      <div>
        <div className="card" > 
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
  <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQOkn4TvBAth9cf8Kj2WC5udvmdyhd8hWag&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
 
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  
}
export default Newsitem