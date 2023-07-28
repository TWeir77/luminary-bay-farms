import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <main>
      <div id="contact-title">
        <h1 className="section-title">Let's Chat!</h1>
      </div>
      <form id="form" action="mailto:example@gmail.com">
        <h4 id='form-header'>Reach out to us with any inquiries regarding our microgreens!</h4>
        <p id="form-subheader">We're happy to tell you where to get them, what's coming soon, and recommendations for new recipe ideas. Thanks for choosing Luminary Bay Farms.</p>
        Subject:<br/>
        <input className="input" type="text" name="subject" placeholder="Your Name" required /><br/>
        Email:<br/>
        <input className="input" type="email" name="email" placeholder="Your Email" required /><br/>
        Please tell us a little about your inquiry:
        <div className="radio">
          <label for='delivery'>Does Luminary Bay Farms deliver to my zip code?</label>
          <input className="bubble" type="radio" id="delivery" name="inquiry" value="delivery"/>
        </div>
        <div className="radio">
          <label for='learnMore'>I'd like to learn more about microgreens.</label>
          <input className="bubble" type="radio" id="learnMore" name="inquiry" value="learnMore"/>
        </div>
        <div className="radio">
          <label for='contract'>My restaurant is interested in your microgreens.</label>
          <input className="bubble" type="radio" id="contract" name="inquiry" value="contract"/>
        </div>
        <div className="radio">
          <label for='other'>Other: please specify below.</label>
          <input className="bubble" type="radio" id="other" name="inquiry" value="other"/>
        </div>
        <br/>
        Message:<br/>
        <textarea name="body" rows="5" cols="30" placeholder="Your Message"></textarea><br/>
        <input id="submit-button" type="submit" value="Send"/>
      </form>
    </main>
  )
}