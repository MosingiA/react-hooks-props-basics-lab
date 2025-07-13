import React from "react";
import Links from "./Links";


function About(props) {
  // Conditional rendering: only render About if isPublished is true
  // if (!props.isPublished) {
  //   return null;
  // } else {
  return (
    <div id="about">
      <h2>About Me</h2>
     {props.bio &&<p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}


export default About;
