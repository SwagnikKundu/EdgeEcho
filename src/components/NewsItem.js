import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {imageUrl, title, description,newsUrl} = this.props;
    
    return (
      <div>
        <div className="card mx-2 my-2" style={{width: '18rem'}}>
        <img src={!imageUrl?'https://s.yimg.com/ny/api/res/1.2/Z3BBsCiHH2pQXEnFXKEs9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2024-08/bca09200-6555-11ef-bb7c-d9ba17ebeb66':imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
