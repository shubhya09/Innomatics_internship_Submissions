import React, { Component } from "react";

export default class QuoteGenerator extends Component {
  constructor() {
    super();
    this.state = {
      quote: "Click the button to get inspired",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHwy",
    };
  }
  motovationalQuotes = [
    {
      text: "Peace comes from within. Do not seek it without. - Buddha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03j1RAteQz4dWgevN4PEe0NpjY8Jpq76ehg&s"
    },
    {
      text: "Calm mind brings inner strength and self-confidence. - Dalai Lama",
      image: "data:image/jpeg;base64,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"
    },
    {
      text: "The greatest weapon against stress is our ability to choose one thought over another. - William James",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNXtjY_3rBBQyZFIPF7VVW_x7k1vuRtl5Xg&s"
    },
    {
      text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSod962CF6Nk0Fs_GX08DmJyL7jGMrNf1YXyw&s"
    },
    {
      text: "Almost everything will work again if you unplug it for a few minutes, including you. - Anne Lamott",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppII2JNYY79rr-qSm8CDeCYPYdLp6_5X6CA&s"
    },
    {
      text: "Tension is who you think you should be. Relaxation is who you are. - Chinese Proverb",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7gE6mCmq0DvYfTaQ7sgdlXZkqwD2SEzSlDg&s"
    }
  ];

  generateQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * this.motovationalQuotes.length
    );
    this.setState({
      quote: this.motovationalQuotes[randomIndex].text,
      image: this.motovationalQuotes[randomIndex].image,
    });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${this.state.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1>{this.state.quote}</h1>
          <button
            onClick={this.generateQuote}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
            }}
          >
            Inspire Yurself!
          </button>
        </div>
      </div>
    );
  }
}
