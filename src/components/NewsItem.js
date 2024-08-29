import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { imageUrl, title, description, newsUrl, author, date, source } =
      this.props;

    return (
      <div>
        <div className="card m-4">
          <img
            src={
              !imageUrl
                ? "https://s.yimg.com/ny/api/res/1.2/Z3BBsCiHH2pQXEnFXKEs9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2024-08/bca09200-6555-11ef-bb7c-d9ba17ebeb66"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info rounded-pill text-bg-info">
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              By {author} on {date}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
