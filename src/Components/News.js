import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel"; // Import SidePanel

export class News extends Component {
  constructor() {
    super();
    this.state = { 
      articles: [], 
      loading: false, 
      category: "general", 
      author: "",
      categoryViews: { general: 0, business: 0, sports: 0, technology: 0, health: 0, science: 0 }
    };
  }

  fetchNews = async (category, author = "") => {
    this.setState({ loading: true });
    
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6a8c53491d80475ca792b5cf5217f256`;
    
    // If searching by author, modify the API URL
    if (author) {
      apiUrl = `https://newsapi.org/v2/everything?q=${author}&apiKey=6a8c53491d80475ca792b5cf5217f256`;
    }

    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  };

  componentDidMount() {
    this.fetchNews(this.state.category);
  }

  handleCategoryChange = (category) => {
    if (category === "recommended") {
      category = this.getMostViewedCategory();
    }
    
    this.setState(prevState => ({
      category,
      author: "", // Reset author when category changes
      categoryViews: {
        ...prevState.categoryViews,
        [category]: prevState.categoryViews[category] + 1,
      }
    }), () => {
      this.fetchNews(category);
    });
  };

  handleAuthorSearch = (author) => {
    this.setState({ author }, () => {
      this.fetchNews(this.state.category, author); // Fetch news based on author
    });
  };

  getMostViewedCategory = () => {
    const { categoryViews } = this.state;
    return Object.keys(categoryViews).reduce((a, b) => categoryViews[a] > categoryViews[b] ? a : b);
  };

  render() {
    return (
      <div className="d-flex">
        <SidePanel handleAuthorSearch={this.handleAuthorSearch} /> {/* Pass handleAuthorSearch */}
        
        <div className="flex-grow-1">
          <Navbar handleCategoryChange={this.handleCategoryChange} />
          
          <div className="container my-3">
            <h2>News App - {this.state.author ? `Articles by ${this.state.author}` : `${this.state.category.toUpperCase()} News`}</h2>
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
      </div>
    );
  }
}

export default News;
