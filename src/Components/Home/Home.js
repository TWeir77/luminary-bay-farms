import React from "react";
import Featured from '../Featured/Featured';
import './Home.css';

export default function Home() {
  return (
    <main>
      <div className='landing-banner'>
        <div className='banner-title'>
          <h1>Luminary Bay Farms</h1>
          <h2>Home Grown Micro Greens Built To Pack A Punch Of Full Flavor And Nutrition</h2>
        </div>
      </div>
      <Featured />
      <div className="micro-greens-container">
        <div className="micro-greens-content">
          <h2>Micro Greens</h2>
          <p>If you didn't know already, micro greens are classified as plants that are harvested, at max, about a week after they start growing. The secret to these tasty little greens is that they pack a mass of nutrients to help the young flora grow. Perfect for salads, garnishes, or even a great snack, micro greens come in a variety of shapes, and colors, rich in potassium, iron, zinc, copper, and magnesium. Peak your interest yet?</p>
          <button>Learn More!</button>
        </div>
        <img src="/images/display-prep.jpg" alt='Micro Greens Prep' />
      </div>
    </main>
  )
}