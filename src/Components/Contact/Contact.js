import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <main>
      <div>
        <h1>Let's Chat!</h1>
      </div>
      <form action="mailto:example@gmail.com">
        Subject:<br/>
        <input type="text" name="subject" placeholder="Your Name" required /><br/>
        Email:<br/>
        <input type="email" name="email" placeholder="Your Email" required /><br/>
        Message:<br/>
        <textarea name="body" rows="5" cols="30" placeholder="Your Message"></textarea><br/>
        <input type="submit" value="Send"/>
      </form>
    </main>
  )
}