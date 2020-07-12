import React , {Component} from 'react';
import classes from './Form2.module.css';
import FormComponent from './FormComponent';

class Form2 extends Component{

    state={
        firstName:"",
        lastName:"",
        passport:"",
        gender:"",
        pirority:"",
        destination:"",
        destinations:"",
        email:"",
        phone:"",
        dates:"",
        showResult:false,
        showButton:false,
        show:false, 
        diet:{
            isVegan:false,
            isKosher:false,
            isLactoseFree:false
        }
    }

    inputHandler = (event) => {
        const { name , value , type , checked } = event.target
        if(type === "checkbox")
        {
            this.setState(prevState=>{
                return {
                    diet: {
                        ...prevState.diet,
                        [name] : checked
                    }
                }
            })
        }
        else {
            this.setState ({
                [name] : value
//[event.target.name]=event.target.value
            })
        }
    }

    showModal = () => { 
        this.setState({ show: true });
    }
    
    hideModal = () => { 
        this.setState({ show: false ,  showButton : true });
    }

    handsleSubmit = ( event ) => {
        alert("Your Form is sucessfully Submitting:"  + "  " + this.state.firstName)
        event.preventDefault();
    }
    
    closeModal = () =>{
        this.setState({
            show : false
        })
    }
    
    render(){
        return(
            <FormComponent 
            clicked = { this.inputHandler }
            click = { this.handsleSubmit }
            showModal = { this.showModal }
            hideModals = { this.hideModal }
            closeModal = { this.closeModal }
            {...this.state}/>          
        );
    }
}

export default Form2
