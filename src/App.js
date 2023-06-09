import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js"
import './App.css';

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
          {cards}
      </section>
    </div>
  )
}


// {item: {id: 1, 
// title: "Life Lessons with Katie Zaferes", 
// description: "I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.", 
// price: 136, coverImg: "katie-zaferes.png", 
// stats: {rating: 5, reviewCount: 6}, 
// location: "Online", 
// openSpots: 0}}