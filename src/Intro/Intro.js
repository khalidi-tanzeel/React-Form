import React from 'react';
import classes from './Intro.module.css';

const intro =(props) => {
    return(
       <div className = { classes.right }>
           <div className = { classes.flipcard }>
          <div className = { classes.flipcardinner }>
         <div className = { classes.flipcardback }>
             <p>
                 I made this website using React concepts.<br/>
                  I know this a easy task but its exciting for me :)
                  </p>
             <p>I want to add pic but I donno why its not working urghhhh</p>
         </div>
        <div className = { classes.flipcardfront }>
      <h1> Tanzeel Khalidi </h1> 
      <p> Software Engineer </p> 
       <p> Passionate Learner </p>
       <p> #NewCoder </p>
      <p> Flip the card to know about me. </p>
        </div>
        </div>
         </div>
       </div>
    );
}

export default intro