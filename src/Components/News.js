import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Navbar from "./Navbar"; // Import the Navbar component

export class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, category: "general" }; // Add category to state
  }

  // Fetch news based on the selected category
  fetchNews = async (category) => {
    this.setState({ loading: true });
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6a8c53491d80475ca792b5cf5217f256`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  };

  componentDidMount() {
    this.fetchNews(this.state.category); // Fetch default category news on mount
  }

  handleCategoryChange = (category) => {
    this.setState({ category }, () => {
      this.fetchNews(category); // Fetch news when category changes
    });
  };

  render() {
    return (
      <div>
        <Navbar handleCategoryChange={this.handleCategoryChange} /> {/* Pass the method as prop */}
        <div className="container my-3">
          <h2>News App - {this.state.category.toUpperCase()} News</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsCard
                    title={element.title ? element.title.slice(0, 40) : "No Title"}
                    description={element.description ? element.description : "No Description"}
                    imageurl={element.urlToImage || "default_image_url.jpg"}
                    publishedAt={element.publishedAt ? new Date(element.publishedAt).toLocaleDateString() : "Unknown"}
                    content={element.content || "No Content"}
                    author={element.author || "Unknown"}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
