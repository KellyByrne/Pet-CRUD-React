import React from 'react';
import {connect} from 'react-redux';
import {fetchPets} from '../../actions';

class ShowPets extends React.Component {
    componentDidMount() {
       this.props.fetchPets();
    }

    renderList = () => {
        return this.props.pets.map(pet => {

            return (
                <div className="large-4 medium-4 small-4 columns" key={pet._id}>
                    <h3>{pet.name}</h3>
                    <img src={`https://s3.amazonaws.com/kbpet-images/${pet.filename}`}/>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.pets);
        return (
            <div className="row">
                {this.renderList()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        pets: Object.values(state.pets)
    };
}

export default connect(mapStateToProps, {fetchPets})(ShowPets);