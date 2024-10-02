import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

export class Translate extends Component {
  componentDidMount() {
    // Load the Google Translate script dynamically when the component is mounted
    if (!window.googleTranslateElementInit) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(googleTranslateScript);

      // Function to initialize the translation widget
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default page language
            includedLanguages: "hi,en,mr", // Include Hindi, English, and Marathi
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element" // Target div where translation widget will be rendered
        );
      };
    }
  }

  render() {
    return (
      <div className="container-fluid position-fixed" style={{ top: '70px', right: '10px', zIndex: 1000 }}>
        <div className="card" style={{ maxWidth: '200px', backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <div className="card-body text-center">
            <h6 className="card-title">Translate this page</h6>
            {/* The div where the Google Translate widget will be rendered */}
            <div id="google_translate_element" className="mb-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Translate;
