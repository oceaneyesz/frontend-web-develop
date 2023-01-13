/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.

 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the
disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : Zhao Yuyang 
 * Student ID : 1155181315 
 * Date : 2022.12.15
 */ 
import { useState } from "react";
import "./App.css";
import { json, Navigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="header-background">
        <h1 id="h11"> Welcome to 1155181315 Blog</h1>
        <div id="index_button">
          <a href="/index">
            <button type="button" className="btn btn-primary">Home</button>
          </a>
          &nbsp;&nbsp;
          <a href="/message-board">
          <button type="button" className="btn btn-primary">Message Board</button>
          </a>
        </div>
      </div>
      <div className="panel-body">
        <Routes>
          <Route path="/posts/run" exact element={<Run/>}/>
          <Route path="/posts/sunset" exact element={<Sunset/>}/>
          <Route path="/posts/painting" exact element={<Painting/>}/>
          <Route path="/posts/concert" exact element={<Concert/>}/>
          <Route path="/posts/bicycles" exact element={<Bicycles/>}/>
          <Route path="/message-board" exact element={<MessageBoard/>}/>
          <Route path="/index" exact element={<Index/>}/>
          <Route path="/" exact element={<Index/>}/>
        </Routes>
      </div>
      </div>
  );
}

function Run() {
    return(
      <div className="run">
        <div className="post-button">
          <a href="/index">
            <button className="btn btn-secondary">Back</button>
          </a>
        </div>
        &nbsp;&nbsp;
        <div className="post-content">
          <h1>Every day 1k, Doctor run away</h1>
          <p>According to Wikipedia, Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity. The term running can refer to any of a variety of speeds ranging from jogging to sprinting.</p>
        </div>
      </div>
    );
}
// function sunset() {

// }

function Sunset() {
    return (
      <div className="sunset">
        <div className="post-button">
          <a href="/index">
            <button className="btn btn-secondary">Back</button>
          </a>
        </div>
        &nbsp;&nbsp;
        <div className="post-content">
          <h1>Praise the Sun</h1>
          <p>The Sun's core fuses about 600 million tons of hydrogen into helium every second, converting 4 million tons of matter into energy every second as a result. This energy, which can take between 10,000 and 170,000 years to escape the core, is the source of the Sun's light and heat. When hydrogen fusion in its core has diminished to the point at which the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature while its outer layers expand, eventually transforming the Sun into a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury and Venus, and render Earth uninhabitable – but not for about five billion years. After this, it will shed its outer layers and become a dense type of cooling star known as a white dwarf, and no longer produce energy by fusion, but still glow and give off heat from its previous fusion.</p>
        </div>
      </div>
    );
}

function Painting() {
  return (
    <div className="painting">
      <div className="post-button">
        <a href="/index">
          <button className="btn btn-secondary">Back</button>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-content">
        <h1>Do you like drawing?</h1>
        <p>Painting is the practice of applying paint, pigment, color or other medium to a solid surface (called the "matrix" or "support"). The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. In art, the term painting describes both the act and the result of the action (the final work is called "a painting"). The support for paintings includes such surfaces as walls, paper, canvas, wood, glass, lacquer, pottery, leaf, copper and concrete, and the painting may incorporate multiple other materials, including sand, clay, paper, plaster, gold leaf, and even whole objects.</p>
      </div>
    </div>
  );
}

function Concert() {
  return (
    <div className="concert">
      <div className="post-button">
        <a href="/index">
          <button className="btn btn-secondary">Back</button>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-content">
        <h1>Memorable Day!</h1>
        <p>According to Wikipedia, A concert is a live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band. Concerts are held in a wide variety and size of settings, from private houses and small nightclubs, dedicated concert halls, amphitheatres and parks, to large multipurpose buildings, such as arenas and stadiums. Indoor concerts held in the largest venues are sometimes called arena concerts or amphitheatre concerts. Informal names for a concert include show and gig. Regardless of the venue, musicians usually perform on a stage (if not actual then an area of the floor designated as such). Concerts often require live event support with professional audio equipment. Before recorded music, concerts provided the main opportunity to hear musicians play. For large concerts or concert tours, the challenging logistics of arranging the musicians, venue, equipment and audience (ticket sales) are handled by professional tour promoters.</p>
      </div>
    </div>
  );
}

function Bicycles() {
  return (
    <div className="bicycles">
      <div className="post-button">
        <a href="/index">
          <button className="btn btn-secondary">Back</button>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-content">
        <h1>Olympic GO GO!</h1>
        <p>According to Wikipedia, The cycling competitions of the 2020 Summer Olympics in Tokyo featured 22 events in five disciplines. The 2020 Olympics were postponed to 2021 due to the COVID-19 pandemic. Cycling competitions had been contested in every Summer Olympics programme since the first modern Olympiad in 1896 alongside athletics, artistic gymnastics, fencing and swimming. Since the 1896 contests which featured five track events and an 87 km road race from Athens to Marathon and back, Olympic cycling had gradually evolved to include women's competitions, mountain bike and BMX to arrive at the current 22 events. The cycling program for this edition was expanded with 4 more events than those held in 2016. BMX freestyle was added in the program for the first time and there will also be a return of Madison events on the track that had been removed from the Olympic program in 2008.</p>
      </div>
    </div>
  );
}

function Index () {
    return (
      <div className="sunset">
        &nbsp;&nbsp;
      <div className="post-border">
        <a href="/posts/run">
          <img className="img1" src="run.jpg" alt="run"/>
          <div>
            <h4 className="coordinate_h">Every day 1k, Doctor run away</h4>
            <p className="coordinate_p">Running is good for health.</p>
          </div>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-border">
        <a href="/posts/sunset">
          <img className="img1" src="sunset.jpg" alt="sunset"/>
          <div>
            <h4 className="coordinate_h">Praise the Sun</h4>
            <p className="coordinate_p">The Sun is a wondrous body. Like a magnificent father!</p>
          </div>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-border">
        <a href="/posts/painting">
          <img className="img1" src="painting.jpg" alt="painting"/>
          <div>
            <h4 className="coordinate_h">Do you like drawing?</h4>
            <p className="coordinate_p">Painting is an important form in the visual arts</p>
          </div>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-border">
        <a href="/posts/concert">
          <img className="img1" src="concert.jpg" alt="concert"/>
          <div>
            <h4 className="coordinate_h">Memorable Day!</h4>
            <p className="coordinate_p">This is the first time I went to a concert</p>
          </div>
        </a>
      </div>
      &nbsp;&nbsp;
      <div className="post-border">
        <a href="/posts/bicycles">
          <img className="img1" src="bicycles.jpg" alt="bicycles"/>
          <div>
            <h4 className="coordinate_h">Olympic GO GO!</h4>
            <p className="coordinate_p">Bicycle seems fun</p>
          </div>
        </a>
      </div>
    </div>
    );
}

function getTime() {
  var d = new Date();
  d.setHours(d.getHours(), d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString()
}

// class MessageBoard extends React.Component{
class MessageBoard extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      users: [],
      new_Email_address:'',
      new_Message:'',
      new_time:'',
    };

}

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e) {
      e.preventDefault();
        const post ={
          Email_address:this.state.Email_address,
          Message:this.state.Message,
        }
        fetch("/.netlify/functions/server",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(post)
        })
        .then((res) => { console.log(res);return res.text();})
        .then((json) =>{
            // console.log(json)
            // console.log(JSON.parse(json))
            // console.log(JSON.parse(json).value)
            this.setState({users:JSON.parse(json).value})
            this.setState({new_Email_address:this.state.Email_address});
            this.setState({new_Message:this.state.Message});
            this.setState({new_time:getTime()});
            
        })
        .catch((err) => console.error(err));
    };
  
    render(){
    return (
      <div className="message-board">
        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="Email">
              <label>
              Email address: &nbsp;
              <input type="text" name="Email_address" className="form-control" placeholder="name@example.com" size="70" onChange={this.onChange.bind(this)} defaultValue={this.state.Email_address}/>
              </label>
            </div>
            <div className="message">
              <label>
              Message: &nbsp;
              <input type="text" name="Message" className="form-control" placeholder="your message" size="70"  onChange={this.onChange.bind(this)} defaultValue={this.state.Message}/>
              </label>
            </div>
              <div className = "form_button">
              <button className="btn btn-primary">Submit</button>
              </div>
          </form>
          {/* <div className = "form_button">
              <button onClick={handleClick} className="btn btn-primary">Submit</button>
              <p>{message}</p>
          </div> */}
          <div className="the_list">
          <ul>
            {
              this.state.users?.map((item)=>(
              <li>{item.Email_address}        {item.Message}        {item.created}</li>
              ))  
            }
            <li>{this.state.new_Email_address}        {this.state.new_Message}        {this.state.new_time}</li>      
          </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
