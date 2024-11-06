NEWS HUB
This is a full-stack news website built with the MERN (MongoDB, Express.js, React, Node.js) stack. The site allows users to browse news articles from various categories, filter news by keywords, translate articles, view top authors, and access a personalized list of recommended articles based on the most viewed categories.

Features
News Fetching:
News articles are fetched from the News API and displayed on the site. Users can browse articles from various sources, view headlines, and read full articles.

Google Translate Integration:
The website provides an option to translate news articles into different languages using the Google Translate API. Users can select their preferred language to translate the content instantly.

Keyword Filtering:
Users can filter news articles based on specific keywords. This feature allows users to narrow down the articles displayed according to their interests or current trending topics.

Category Filtering:
The news articles can be filtered by category (e.g., technology, business, sports, etc.). Users can browse articles by selecting from various categories listed on the website.

Recommended Section:
A personalized "Recommended" section is available, which displays the most-viewed news categories. This helps users easily access trending categories that have been viewed the most by others.

Dynamic Top Authors:
The website dynamically retrieves and displays a list of top authors. Users can filter news articles based on these authors, allowing them to follow content from their favorite writers.

Author-Based News Filtering:
Users can filter the news based on specific authors. By selecting an author from the top authors list, they can view articles published by that author only.

Installation
Clone the repository:
git clone https://github.com/mehrshadnava/NewsHub.git

Navigate to the project directory:
cd mern-news-website

Install dependencies for both the server and the client:

npm install
cd client

npm install

Create a .env file in the root directory and add your API keys:

NEWS_API_KEY=your_news_api_key
GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key
Start the development server:

npm run dev

Folder Structure

Backend (Express):
login and signup using mongo db.
Fetches data from the News API.
Handles filtering and query logic for authors, categories, and keywords.
Exposes API endpoints to the frontend.

Frontend (React):
Displays news articles and allows filtering by keyword, category, and author.
Integrates Google Translate API for article translation.
Provides a recommended section based on most-viewed categories.

API Usage
News API:
The News API is used to retrieve the latest news articles. The backend server queries the API and provides the data to the frontend.

Google Translate API:
Articles can be translated on the fly using the Google Translate API. Users can choose their preferred language, and the content is translated accordingly.

How to Use
Browse News:
Upon landing on the website, users can see a list of the latest news articles. The news can be browsed by categories, searched by keywords, or filtered by top authors.

Filter by Keywords:
Users can enter keywords in the search bar to filter articles containing those terms.

Filter by Category:
Users can select from a variety of categories to view articles within a specific topic of interest.

View Recommended:
The recommended section displays the most-viewed categories based on site traffic. Users can click on these categories to quickly browse trending news.

Translate Articles:
Clicking on the translate option allows users to view the article in their preferred language using Google Translate.

View Articles by Authors:
Users can browse articles by top authors and filter news accordingly. This helps users follow their favorite journalists or writers.

Dependencies
Backend:
express: Fast, unopinionated, minimalist web framework for Node.js.
axios: Promise-based HTTP client for the browser and Node.js.
dotenv: Loads environment variables from .env file.
Frontend:
react: JavaScript library for building user interfaces.
react-router-dom: Declarative routing for React applications.
axios: To make API requests to the backend.
bootstrap: Frontend framework for responsive design.
License
this project is created by Mehrshad nava and Aiman

Acknowledgements
News API for providing up-to-date news articles.
Google Cloud for the translation service.
