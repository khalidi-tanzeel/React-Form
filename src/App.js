import React,{Component} from 'react';
import classes from './App.module.css';
import Form2 from './Form2/Form2';
import Header from './Header/Header';
import Footer from './Footer';
import Intro from './Intro/Intro';

class App extends Component {
 
  render(){
  return (
    
      <div>
        <Header/>
        <div className = { classes.body }>
        <Form2/>
        </div>
        <Footer/>
      </div>
  );
  }
}

export default App;
