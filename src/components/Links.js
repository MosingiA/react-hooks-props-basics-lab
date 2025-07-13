import React from 'react';
import User from '../data/user';
import About from './About';


function Links(props) {
  return (
    <div id="links">
      <h3>Links</h3>
        <a href={props.github}>{props.github}</a><br/>
        <a href={props.linkedin}>{props.linkedin}</a>
        </div>
        );
  }

  export default Links;