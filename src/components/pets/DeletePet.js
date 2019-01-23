import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPet, deletePet} from '../../actions';
import Modal from '../Modal';


class DeletePet extends React.Component {
    componentDidMount() {
        this.props.fetchPet(this.props.match.params.id);
    }

    renderButtons = () => {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deletePet(id)} className="btn btn-danger">Delete</button>
                <Link to={`/pets/${id}`}>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        if (!this.props.pet) {
            return "Are you sure you want to delete this pet?"
        }

        return `Are you sure you want to delete: ${this.props.pet.name}`
    }

    render() {
        console.log(this.props.pet)
        return (
            <div>
                <Modal 
                    title="Delete this Pet"
                    content={this.renderContent()}
                    actions={this.renderButtons()} 
                />  
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {pet: state.pets[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPet, deletePet})(DeletePet);