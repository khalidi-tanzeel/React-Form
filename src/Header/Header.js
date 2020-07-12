import React from 'react';
import classes from './Header.module.css';

const header = () =>{

return(
    <div>
    <header className ={ classes.Toolbar }>
    <a href="#default" className = { classes.logo }> Alaska Airlines</a>
    <div className = { classes.dropdown }>
      <a
        className = { classes.Applink }
        href="https://www.flexischools.com.au/info-for-schools"
        target="_blank" >
        BOOK
      </a>
      <div className = { classes.dropdowncontent }>
      <a href="#">Search Flight</a>
      <a href="#">Planning</a>
      <a href="#">Services</a>
      </div>
      </div>
      <div className = { classes.dropdown }>
      <a
        className = { classes.Applink }
        href="https://www.flexischools.com.au/info-for-schools"
        target="_blank">
        MANAGE
      </a>
      <div className = { classes.dropdowncontent }>
      <a href="#">Cancel Booking</a>
      <a href="#">Choose Seat</a>
      <a href="#">Upgrade your Flight</a>
      </div>
      </div>
      
      <div className = { classes.dropdown }>
      <a
        className = { classes.Applink }
        href="https://www.flexischools.com.au/info-for-schools"
        target="_blank" >
        HELP
      </a>
      <div className = { classes.dropdowncontent }>
      <a href="#">Give Feedback</a>
      <a href="#">Any Queries</a>
       </div>
       </div>

      <div className = { classes.dropdown }>
      <a
        className = { classes.Applink }
        href="https://www.flexischools.com.au/info-for-schools"
        target="_blank"
      >
        FLIGHT STATUS
      </a>
      <div className = { classes.dropdowncontent }>
      <a href="#">Arrival Time</a>
      <a href="#">Departure Time</a>
      <a href="#">Boarding Time</a>
       </div>
       </div>

    <button className = { classes.login }>Log In</button>
      
    </header>
    </div>
)
}

export default header