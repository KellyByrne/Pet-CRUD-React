import React from 'react';
import {connect} from 'react-redux';
import {createPet} from '../../actions';
import PetForm from './PetForm';

class CreatePet extends React.Component {
    onSubmit = (formValues) => {
        this.props.createPet(formValues);
    }

    render() {
        return (
            <div>
                <h3>Add a Pet</h3>
                <PetForm onSubmit={this.onSubmit} />
            </div>
           
        );
    }
};

export default connect(null, {createPet})(CreatePet);
