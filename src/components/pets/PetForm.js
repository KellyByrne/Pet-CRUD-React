import React from 'react';
import {Field, reduxForm} from 'redux-form';

class PetForm extends React.Component {

    renderError = ({error, touched}) => {
        const textstyle = {color:'red', fontSize:'12px'}
        if (touched && error) {
            return (
                <div style={textstyle}>{error}</div>
            );
        }
    }

    renderInput = (formProps) => {
        // console.log(formProps);
        // const className=`field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className="form-group">
                <label>{formProps.label}</label>
                <input autoComplete="off" className="form-control" {...formProps.input}/>
                {this.renderError(formProps.meta)}
            </div>
           
        );
    }

    renderTextArea = ({input, label, meta}) => {
        // console.log(meta);
        return (
            <div className="form-group">
                <label>{label}</label>
                <textarea className="form-control" {...input}></textarea> 
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        // console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Enter Pet Name"/>
                <Field name="bio" component={this.renderTextArea} label="Enter Pet Bio"/>
                <Field name="likes" component={this.renderInput} label="Enter Pet Likes"/>
                <Field name="dislikes" component={this.renderInput} label="Enter Pet Dislikes"/>
                <button className="btn btn-success">Submit</button>
            </form>
        );

    }
}

const validate = (formValues) => {
    const errors= {};

    if (!formValues.name) {
        errors.name = "You must enter a pet name."
    }

    if (!formValues.bio) {
        errors.bio = "You must enter a pet bio."
    }

    if (!formValues.likes) {
        errors.likes = "You must enter some likes your pet has."
    }

    if (!formValues.dislikes) {
        errors.dislikes = "You must enter some dislikes your pet has."
    }

    return errors;
}

export default reduxForm({
    form:'petForm',
    validate: validate
})(PetForm);