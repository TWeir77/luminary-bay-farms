import React from "react";
import './About.css';

export default function About() {
  return (
    <main>
      <div className='about-banner'>
        <h1>The Story at Luminary Bay Farms!</h1>
        <h2 className="section-title">The Green Thumb</h2>
        <div className="about-card">
          <img src="../../../images/Neil-Sterling-wide.jpg" className='about-image' alt="Neil Sterling Profile" />
          <div className="about-content">
            <h3>Neil Sterling</h3>
            <p>Meet Neil, the founder and owner of Luminary Bay Farms! Neil has always had a passion for nature and the environment. He's a big believer in sustainable living and the organic diet. Neil's love for nature led him to gardening, where he discovered the joy of growing his own food. He quickly realized that there's nothing quite like the taste of fresh, homegrown produce.</p>
            <p>Neil's passion for gardening eventually led him to start growing microgreens. Everything he produced quickly became a favorite among family and friends, enjoying the greens as salads, garnishes, and even as a great snack. Using organic, sustainable methods, he saw a business opportunity to provide people with a healthier form of food, packed with vitamins and nutrients.</p>
            <p>When Neil isn't working, he enjoys spending time outdoors; hiking, camping, and exploring new places. As he clearly likes to work with his hands, it came as no surprise that Neil ventured into other DIY hobbies as well, such as microbrewing!</p>
            <p>Neil is excited to share his passion for microgreens with you and hopes that you'll join him on this journey. Whether you're a health nut or just looking to try something new, Neil's microgreens are the perfect addition to any meal. Thanks for stopping by and we look forawrd to hearing from you!</p>
          </div>
        </div>
      </div>
      <div className="about-microgreens" id="microgreens-bio">
        <h2 className="section-title">Microgreens</h2>
        <div className="about-card">
          <div className="about-content">
            <h3>What Are They?</h3>
            <p>So, by the time you got here, you've at least come to understand that microgreens are tiny little plants, but what exactly <emphasis>are</emphasis> microgreens? Well the short answer is that microgreens are essentially seedlings, or sprouts, of various herbs and vegetables. The truth is, you may have seen them plenty of times before without realizing it, as they are a favorite topping for many chefs.</p>
            <p>The long answer starts with noting that, although very small in size, microgreens are highly concentrated in nutrients. Studies suggest that most microgreens contain 40 times more vitamins and minerals than what is found in the leaves of their fully-grown counterparts. Mature vegetable may never be replaced, but microgreens are the perfect filler for all other dietary needs.</p>
            <p>Moving on to flavor, you may be surprised to learn that alongside all those nutrients, microgreens are just as full of great taste. Packed with intense flavor, and the subtle crunch offered by their texture, these greens can make a dish explode! The variety is all there too, from sweet to spicy, there's plenty to choose from to give your meal some real pop.</p>
            <p></p>
          </div>
          <img src="../../../images/broccoli-bag.jpg" className="about-image" alt="bagged microgreens"/>
        </div>
        <div className="about-card">
          <img src="../../../images/display-prep.jpg" className="about-image" alt="microgreens prep"/>
          <div className="about-content">
            <h3>The Growing Process</h3>
            <p>Most microgreens can be grown in about a week, or two at most, but with the right care, they can be grown indoors! Just as gardening goes, the steps for growing microgreens can vary slightly for different people, each with their own methods, and here at Luminary Bay Farms, its no different. </p>
            <p>Our process begins with lining potting trays with a loose, 1-inch thick, layer of potting soil. When grown these trays are referred to as flats. After the soil, we add the seeds across the whole tray. Our method is to cover the soil almost completely with seeds, until you can barely see the soil through the spaces between, to maximize the harvest. The next trick we implement is to use the other trays as a press, placing it atop the seeds and pushing down so each seed makes contact with the loose soil. All thats left then, is to water each tray and rack them under artificial light.</p>
            <p>After the average week of TLC, these microgreens will look full and flush with vibrant colors, ready to harvest. These homegrown microgreens will last an average of two weeks in the fridge, although they will surely prove hard to resist. You may find yourself trying not to eat them all in one sitting!</p>
          </div>
        </div>
        <div className="about-card">
          <div className="about-content">
            <h3>How To Enjoy Them</h3>
            <p>On to the most exciting part of microgreens, eating them! Aside from a healthy snack, there are countless ways to enjoy these little greens, and you should feel encouraged to experiment as much as possible! However, if you wanna stay simple or you need a hand fueling that imagination, we've got plenty of suggestions for delicious ways to prepare them.</p>
            <p>Firstly, the most common uses are as garnishes and salads. Take a microgreen you like, with a flavor you think will compliment a dish, and just sprinkle them on. With the fresh wave of color and taste, you'll be surprised at how quickly your meal gains the appearance of something prepared by a master chef. Salads are just as simple. You can easily add them to a salad you already enjoy, or bundle different microgreens together and create your own combo of flavored greens.</p>
            <p>Now for the less common, but just as mouth-watering, ideas. Microgreens can be a great addition to homemade smoothies or juices, filling it with all those extra nutrients while maintaining the great taste you want. If you're looking for a healthy start to your day, add some to your avocado toast. They also make for great toppings on sandwiches, tacos, or even pizza! It's just as easy to spruce up your dinners with microgreen pesto, stir-fry dishes, or pastas.</p>
            
          </div>
          <img src="../../../images/bunny-snack1.jpg" className="about-image" alt="taco garnish"/>
        </div>
      </div>
      <div className="final-message">
        <p>Luminary Bay Farms will always welcome your enthusiasm and support. We hope you'll come to love our microgreens as much as we do. Please feel free to reach out to our founder, Neil Sterling, to inquire more about our mission, recipes, and inspirations!</p>
      </div>
    </main>
  )
}