
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import { Field, Form, reduxForm } from "redux-form";





class CatForm extends Component {
    constructor(props){
        super(props);
        console.log(this);
    }

    renderField ({ input, label, type, meta: { touched, error, warning } }){
        return(
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>)
    }
    render(){
        return(
            <Form onSubmit={ this.props.handleSubmit(this.props.addNewCat)}>
                <Field
                    component= { this.renderField }
                    lable= "Name"
                    name= "name"
                    type="text"
                />
                
            </Form>
        )
    }
}

// map the redux state to the props object
function mapStateToProps(state){
    return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
function validate(value){
    console.log(value);
}
export default reduxForm({
    form: "newCat",
    validate
})(connect(mapStateToProps, mapDispatchToProps)(CatForm));