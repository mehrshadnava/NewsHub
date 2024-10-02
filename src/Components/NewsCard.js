import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    let { title, description, imageurl, publishedAt, content, author, url } =
      this.props; //destruction

    return (
        <div>
        <div className="card h-100" style={{ width: "18rem", maxHeight: "30rem" }}>
          <img
            className="card-img-top"
            src={imageurl}
            alt="Card image cap"
            style={{ height: "10rem", objectFit: "cover" }} 
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 50 ? title.substring(0, 50) + "..." : title}
            </h5>
            <p className="card-text">
              {description.length > 100 ? description.substring(0, 100) + "..." : description}
            </p>
            <h6 className="card-title">
              Author: {author && author.length > 20 ? author.substring(0, 20) + "..." : author || "Unknown"}
            </h6>
            <h6 className="card-title">
              Published: {new Date(publishedAt).toLocaleDateString()}
            </h6>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      
    );
  }
}

export default NewsCard;
