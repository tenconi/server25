import React from 'react';
import './styles.css';

const About= ()=>{

return(
    <section className="container">
      <h2>About:</h2>
      <br/>
      <h2>Contact:</h2>
      <br/>
      <form action="post" className='aboutForm'>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className='fillBtn_dark'>Send</button>
      </form>
    </section>
  );

}

export default About;