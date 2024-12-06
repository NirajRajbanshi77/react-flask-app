import React from 'react';
import '../Css/GuideStyle.css';
import Navbar from './Navbar';

function h1() {
  return (
    <>
    <Navbar/>
        <div className="guide-page">
      <h1>Cricket Guide</h1>
      
      {/* Navigation Links to Different Sections */}
      <nav className="guide-nav">
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#equipment">Equipment Guide</a></li>
          <li><a href="#rules">Rules</a></li>
          <li><a href="#shots">Cricket Shots</a></li>
          <li><a href="#bowling">Bowling Techniques</a></li>
          <li><a href="#fielding">Fielding Positions</a></li>
          <li><a href="#strategy">Strategies</a></li>
          <li><a href="#fitness">Fitness Training</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="intro">
        <h2>Introduction to Cricket</h2>
        <p>
          Cricket is a bat-and-ball game played between two teams of eleven players on a field. 
          It is one of the most popular sports in the world, especially in countries like India, 
          Australia, England, and South Africa.
        </p>
      </section>

      <section id="equipment">
        <h2>Cricket Equipment Guide</h2>
        <ul>
          <li><strong>Cricket Bat:</strong> Used to hit the ball.</li>
          <li><strong>Cricket Ball:</strong> A hard, leather ball.</li>
          <li><strong>Pads and Gloves:</strong> Protective gear.</li>
          <li><strong>Helmet:</strong> Used for protection.</li>
        </ul>
      </section>

      <section id="rules">
        <h2>Basic Rules of Cricket</h2>
        <ul>
          <li>Each team has 11 players.</li>
          <li>The objective is to score more runs than the opposition.</li>
          <li>Ways to get out: bowled, caught, LBW, and run-out.</li>
        </ul>
      </section>

      <section id="shots">
        <h2>Types of Cricket Shots</h2>
        <ul>
          <li><strong>Drive:</strong> A front-foot shot played along the ground.</li>
          <li><strong>Pull:</strong> A back-foot shot played to a short ball.</li>
          <li><strong>Sweep:</strong> Played to a spinning ball towards the leg side.</li>
          <li><strong>Cut:</strong> A back-foot shot played towards the off-side.</li>
        </ul>
      </section>

      <section id="bowling">
        <h2>Bowling Techniques</h2>
        <ul>
          <li><strong>Fast Bowling:</strong> Focuses on speed and swing.</li>
          <li><strong>Spin Bowling:</strong> Uses wrist or finger action to spin the ball.</li>
          <li><strong>Yorker:</strong> A full-length delivery aimed at the batsman's feet.</li>
          <li><strong>Bouncer:</strong> A short-pitched delivery bouncing high.</li>
        </ul>
      </section>

      <section id="fielding">
        <h2>Fielding Positions</h2>
        <ul>
          <li><strong>Slip:</strong> Positioned next to the wicketkeeper to catch edges.</li>
          <li><strong>Gully:</strong> Positioned between slip and point.</li>
          <li><strong>Mid-Off and Mid-On:</strong> Positioned on either side of the bowler.</li>
        </ul>
      </section>

      <section id="strategy">
        <h2>Cricket Strategies and Tactics</h2>
        <ul>
          <li><strong>Batting Strategy:</strong> Build partnerships and protect wickets early on.</li>
          <li><strong>Bowling Strategy:</strong> Use variation in speed and length.</li>
          <li><strong>Fielding Strategy:</strong> Position fielders based on batsman strengths.</li>
        </ul>
      </section>

      <section id="fitness">
        <h2>Cricket Fitness and Training</h2>
        <ul>
          <li><strong>Strength Training:</strong> Core, legs, and upper body.</li>
          <li><strong>Cardio:</strong> Running and interval training to improve stamina.</li>
          <li><strong>Bowling Drills:</strong> Practice line, length, and consistency.</li>
        </ul>
      </section>

      <section id="faqs">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li><strong>Q:</strong> What are the formats of cricket?<br />
              <strong>A:</strong> Test, ODI, and T20 formats.</li>
          <li><strong>Q:</strong> What is LBW?<br />
              <strong>A:</strong> Leg Before Wicket - a method of dismissal.</li>
        </ul>
      </section>
    </div>
    </>
  )
}

export default h1




