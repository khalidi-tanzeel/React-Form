import React from 'react';
import classes from './Footer.module.css'

const footer=()=>{
    return(
        <div className = { classes.line }>
        <h4 style = { { textAlign : "center" } }> Follow us on :</h4>
            <ul className = { classes.ul }>
    <li className = { classes.li }>
        <a className={classes.a} 
        href="https://twitter.com/julesforrest">
            Twitter</a>
            </li>

    <li className = { classes.li }>
        <a className = { classes.a }
        href="https://codepen.io/julesforrest">
            Facebook</a>
            </li>

    <li className = { classes.li }>
        <a className = { classes.a }
        href="mailto:julesforrest@gmail.com">
            Email</a>
            </li>

    <li className = { classes.li }>
        <a className = { classes.a }
        href="https://dribbble.com/julesforrest">
            Dribbble</a>
            </li>
    <li>
      <p>👋</p>
    </li>
  </ul>
        </div>
    );
}
export default footer