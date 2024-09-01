import React from "react";

const NewsItem = (props) => {
  let { imageUrl, title, description, newsUrl, author, date } = props;

  return (
    <div>
      <div className="card m-4">
        <div>
          <span
            className="badge bg-danger text-bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              left: -2,
              top: -8,
            }}
          >
            {author}
          </span>
        </div>
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
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="text-start mb-2">
            <small className="text-muted ">{date}</small>
          </div>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
