import React from 'react';
import {connect} from 'react-redux';
import {fetchPet} from '../../actions';

class ShowPet extends React.Component {
    componentDidMount() {
       
    }
    render() {
        return (
            <div>ShowPets</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        pets: Object.values(state.pets)
    };
}

export default connect(mapStateToProps, {fetchPet})(ShowPet);