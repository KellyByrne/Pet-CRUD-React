import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchPet, editPet} from '../../actions';
import PetForm from './PetForm';

class EditPet extends React.Component {
    componentDidMount() {
        this.props.fetchPet(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editPet(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.pet) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Pet</h3>
                <PetForm 
                    initialValues={_.pick(this.props.pet, 'name', 'bio', 'likes', 'dislikes')}
                    onSubmit={this.onSubmit}
                /> 
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {pet: state.pets[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPet, editPet})(EditPet);