import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  const posts = [
    { title: 'Mastering Lanes in Gaming', date: 'August 20, 2024', preview: 'Learn how to control lanes in various games.' },
    { title: 'Top 10 Tips for New ADC Players', preview: 'As an ADC, positioning is key! Here are the top 10 tips.' },
    { title: 'The Jungle Guide', date: 'August 25, 2024', preview: 'A comprehensive guide for controlling the jungle.' },
  ];
  return (
    <div className="App">
      <Header name="LaneMastery Blog" />
      <About about="A blog dedicated to helping players master their lanes in competitive games." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
