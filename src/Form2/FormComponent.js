import React from 'react';
import classes from './Form2.module.css';
import Modal from '../Modal/Modal';

const formComponent = (props) => {
    return(
        <div className = { classes.content }>
            <form onSubmit = { props.click }>
                <p 
                style = {{ fontSize:"larger" }}>
                Please Check the <a 
                href="#default" 
                className = { classes.logo }>
                availability 
                </a> of flights first as we are facing some issues due to coronavirus.
                </p>

                <h4>Select the Option on the basis of your Urgency:</h4>
                <section className = { classes.light }>
                <label>
                <input
                className = { classes.input }
                type="radio"
                name="pirority"
                value="Urgent"
                checked = { props.pirority === "Urgent" }
                onChange = { props.clicked }
                required/>
                <span className = { classes.design }></span>
                <span className = { classes.text }>Urgent</span>
                </label>

                <label>
                <input
                 className={classes.input}
                type="radio"
                name="pirority"
                value="Medium"
                checked = { props.pirority === "Medium" }
                onChange = { props.clicked }
                required/>
                <span className = { classes.design }></span>
                <span className = { classes.text }>Medium</span>
                </label>
                <br/>
                </section>
                
                <h1>Enter Details:</h1>
                
                <input 
                className = { classes.tb5 }
                type="text" 
                placeholder="First Name"
                name="firstName"
                value = { props.firstName }
                onChange = { props.clicked }
                required/>
                <br/> <br/>

                
                <input  
                className = { classes.tb5 }
                type="text" 
                placeholder="Last Name"
                name="lastName"
                value = { props.lastName }
                onChange = { props.clicked }
                required/>
                <br/> <br/>
                
                
                <input 
                className = { classes.tb5 }
                type="email" 
                placeholder="Email Address"
                name="email"
                value = { props.email }
                onChange = { props.clicked }
                required/>
                <br/> <br/>
                
                
                <input
                className = { classes.tb5 } 
                type="text" 
                placeholder="Mobile Number"
                name="phone"
                value = { props.phone }
                onChange = { props.clicked }
                required/>
                <br/> <br/>

            
                <input 
                className = { classes.tb5 }
                type="text" 
                placeholder="Passport Number"
                name="passport"
                value = { props.passport }
                onChange = { props.clicked }
                required/>
                <br/> 
                
                <h2>SELECT YOUR GENDER:</h2>
                <section className = {classes.light}>
                <label>
                <input
                className = { classes.input }
                type="radio"
                name="gender"
                value="Male"
                checked = { props.gender==="Male" }
                onChange = { props.clicked } 
                required/>
                <span className = { classes.design }></span>
                <span className = { classes.text }>Male</span>
               </label>
                
                <label>
                <input
                className = { classes.input }
                type="radio"
                name="gender"
                value="Female"
                checked = { props.gender==="Female" }
                onChange = { props.clicked }/>
                 <span className = { classes.design }></span>
                <span className = { classes.text }>Female</span>
                </label>
                
                <label>
                <input
                className = { classes.input }
                type="radio"
                name="gender"
                value="Others"
                checked = { props.gender === "Others"}
                onChange = { props.clicked }/>
                 <span className = { classes.design }></span>
                <span className = { classes.text }>Other</span>
               </label>
                </section>
                <br/> <br/>

                <h2 className = { classes.values }>SELECT YOUR DEPARTURE DESTINATION:</h2>
                <select
                className = { classes.select }
                name="destinations"
                value = { props.destinations }
                onChange = { props.clicked }
                required>
                    <option value="">--</option>
                    <option stlye={{fontFamily:"Fondamento"}}value="Australia">AUSTRALIA</option>
                    <option value="Paris">PARIS</option>
                    <option value="London">LONDON</option>
                    <option value="Thailand">THAILAND</option>
                    
                </select>
                <br/> <br/>
                
                <h2>SELECT YOUR ARRIVAL DESTINATION:</h2>
                <select
                className = { classes.select }
                name="destination"
                value = { props.destination }
                onChange = { props.clicked }
                required>
                    <option value="">--</option>
                    <option value="Pakistan">PAKISTAN</option>
                    <option value="Paris">PARIS</option>
                    <option value="London">LONDON</option>
                    <option value="Thailand">THAILAND</option>
                </select>
                <br/> <br/>

                <h2>CHOOSE YOUR TRAVEL DATE:</h2>
                <input
                className = { classes.date }
                type="date"
                name="dates"
                value = { props.dates }
                onChange = { props.clicked }
                required/>

                <h2>DIETARY RESTRICTION:</h2>
                <p>If you have preference then please let us know.</p>
                
                <label>
                <input
                type="checkbox"
                name="isVegan"
                checked = { props.diet.isVegan }
                onChange = { props.clicked }
                />
                Vegetarian</label>
                <br/>

                <label>
                <input
                type="checkbox"
                name="isLactoseFree"
                checked = { props.diet.isLactoseFree }
                onChange = { props.clicked }
                />
                Lactose free</label>
                <br/>

                <label>
                <input
                type="checkbox"
                name="isKosher"
                checked = { props.diet.isKosher }
                onChange = { props.clicked }
                />
                Kosher</label>
                <br/> <br/>
                {props.showButton && <div><button OnClick = { props.click } className = { classes.submitb2 } style={{marginLeft:"650px"}}> 
                Submit Form </button>
                </div>}
            </form>
              
            <div>
               <button onClick = { props.showModal } className = { classes.submitb1 } style={{marginLeft:'50px', marginBotton:'200px'}} > Show Details </button>
                <Modal show={props.show} modalClosed={props.hideModals}><div className = { classes.center }>
                <h1>Entered Information</h1>
                <h4>Your Pirority: { props.pirority }</h4>
                <h4>Your Name: { props.firstName } { props.lastName }</h4>
                <h4>Your Email Address: { props.email }</h4>
                <h4>Your Mobile Number: { props.phone }</h4>
                <h4>Your Passport Number: { props.passport }</h4>
                <h4>Your Gender: { props.gender }</h4>
                <h4>Your Departure Destination : { props.destinations }</h4>
                <h4>Your Arrival Destination : { props.destination }</h4>
                <h4> Your Selected Date : { props.dates }</h4>
                <h4> Your Dietary Option :</h4>
                <ul>
                    <li> Vegetarian : { props.diet.isVegan ? "YES" : "NO" } </li>
                    <li> LactoseFree: { props.diet.isLactoseFree ? "YES" : "NO" } </li>
                    <li> Kosher : { props.diet.isKosher ? "YES" : "NO" } </li>
                
                </ul>
                </div>
                <p style={{ color:"black" }}>If the information you typed is correct then please click on the button below</p>
                <button onClick={ props.hideModals } className = { classes.submitb1 }>Save Changes</button>
                <br/><br/>
                <button onClick={ props.closeModal } className = { classes.submitb3 }>Edit Form</button>
                
                </Modal>
            </div>

               
        </div>
    );
}

export default formComponent
