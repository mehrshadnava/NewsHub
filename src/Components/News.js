import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";

export class News extends Component {
  constructor() {
    super();
    this.state = { 
      articles: [], 
      loading: false, 
      category: "general", 
      searchNews: "", 
      categoryViews: { 
        general: 0, 
        business: 0, 
        sports: 0, 
        technology: 0, 
        health: 0, 
        science: 0 
      } 
    };
  }

  fetchNews = async (category, searchNews = "") => {
    this.setState({ loading: true });
    const apiKey = "6a8c53491d80475ca792b5cf5217f256";
    const baseUrl = searchNews
      ? `https://newsapi.org/v2/everything?q=${searchNews}&sortBy=publishedAt&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    try {
      const response = await fetch(baseUrl);
      const { articles } = await response.json();
      const validArticles = articles.filter(
        ({ title, description, url }) => title && description && url
      );

      this.setState({ articles: validArticles });
    } catch (error) {
      console.error("Failed to fetch news articles:", error);
    } finally {
      this.setState({ loading: false });
    }
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
      searchNews: "",
      categoryViews: {
        ...prevState.categoryViews,
        [category]: prevState.categoryViews[category] + 1,
      }
    }), () => {
      this.fetchNews(category);
    });
  };

  handleSearchNewsChange = (searchNews) => {
    this.setState({ searchNews }, () => {
      this.fetchNews(this.state.category, searchNews);
    });
  };

  getMostViewedCategory = () => {
    const { categoryViews } = this.state;
    return Object.keys(categoryViews).reduce((a, b) => 
      categoryViews[a] > categoryViews[b] ? a : b
    );
  };

  render() {
    const { articles, loading, category, searchNews } = this.state;

    return (
      <div className="d-flex">
        <SidePanel handleSearchNewsChange={this.handleSearchNewsChange} />
        
        <div className="flex-grow-1">
          <Navbar handleCategoryChange={this.handleCategoryChange} />
          
          <div className="container my-3">
            <h2>News App - {searchNews ? `Articles by ${searchNews}` : `${category.toUpperCase()} News`}</h2>
            {loading ? (
              <p>Loading articles...</p>
            ) : (
              <div className="row">
                {articles.map(({ url, title, description, urlToImage, publishedAt, content, author }) => (
                  <div className="col-md-4 my-3" key={url}>
                    <NewsCard
                      title={title.slice(0, 40) || "No Title"}
                      description={description || "No Description"}
                      imageurl={urlToImage || "default_image_url.png"}
                      publishedAt={publishedAt ? new Date(publishedAt).toLocaleDateString() : "Unknown"}
                      content={content || "No Content"}
                      author={author || "Unknown"}
                      url={url}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
