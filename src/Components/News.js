import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Navbar from "./Navbar";

export class News extends Component {
  constructor() {
    super();
    this.state = { 
      articles: [], 
      loading: false, 
      category: "general", 
      categoryViews: { general: 0, business: 0, sports: 0, technology: 0, health: 0, science: 0 }
    }; // Track category views
  }

  fetchNews = async (category) => {
    this.setState({ loading: true });
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6a8c53491d80475ca792b5cf5217f256`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  };

  componentDidMount() {
    this.fetchNews(this.state.category); // Fetch default category news
  }

  handleCategoryChange = (category) => {
    if (category === "recommended") {
      category = this.getMostViewedCategory(); // Set to the most viewed category
    }
    
    // Update category views count
    this.setState(prevState => ({
      category,
      categoryViews: {
        ...prevState.categoryViews,
        [category]: prevState.categoryViews[category] + 1,
      }
    }), () => {
      this.fetchNews(category);
    });
  };

  getMostViewedCategory = () => {
    const { categoryViews } = this.state;
    return Object.keys(categoryViews).reduce((a, b) => categoryViews[a] > categoryViews[b] ? a : b);
  }

  render() {
    return (
      <div>
        <Navbar handleCategoryChange={this.handleCategoryChange} /> {/* Pass handleCategoryChange */}
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
