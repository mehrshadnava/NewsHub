import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsCard from "./NewsCard";

export class News extends Component {
  // creating arrays of data
 
 
  constructor() {
    super();
    this.state = { articles: [], loading: false }; // Initialize articles as an empty array
  }

  // runs after render
  async componentDidMount() {
    this.setState({ loading: true }); // Set loading to true when fetching data
    let apiUrl =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=6a8c53491d80475ca792b5cf5217f256";
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false }); // Set loading to false after fetching
  }
  render() {
    return (
      // create a state to get data

      <div className="container my-3">
        <h2>News App</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
                <div className="col-md-4 my-3" key={element.url}>
                <NewsCard
                      title={element.title ? element.title.slice(0, 40) : "No Title"} // Handle missing title
                      description={element.description ? element.description : "No Description"} // Handle missing description
                      imageurl={element.urlToImage || "default_image_url.jpg"} // Fallback for missing image URL
                      publishedAt={element.publishedAt ? new Date(element.publishedAt).toLocaleDateString() : "Unknown"} // Format published date
                      content={element.content || "No Content"} // Handle missing content
                      author={element.author || "Unknown"} // Handle missing author
                      url={element.url} // URL is essential, don't provide fallback
                    />
              </div>              
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
