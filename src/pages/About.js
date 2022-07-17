import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
      <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})`}}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In provident repellat, sit nam magni ipsum voluptates, nostrum porro, voluptatum veniam pariatur nisi cupiditate. Aspernatur, quibusdam hic neque consequatur recusandae eum sequi illum iure magnam quisquam necessitatibus eveniet alias nesciunt veritatis praesentium quos nobis provident id aliquid quasi, facilis tenetur reiciendis voluptates pariatur! Quisquam, perspiciatis sint? Aspernatur pariatur voluptas autem illum. Quidem accusantium esse voluptate explicabo nihil? Ea tenetur placeat sequi non neque necessitatibus quo, error quis rerum autem tempore obcaecati dolorem voluptates. Natus ullam facilis, corporis saepe explicabo repudiandae inventore dolorem vero, commodi tempora facere incidunt aliquid quaerat quam id.</p>
      </div>
    </div>
  );
}

export default About;
