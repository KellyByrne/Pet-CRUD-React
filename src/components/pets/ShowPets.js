import '../../css/pets.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPets} from '../../actions';


class ShowPets extends React.Component {
    componentDidMount() {
       this.props.fetchPets();
    }

    renderList = () => {
        return this.props.pets.map(pet => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-12 pet-box" key={pet._id}>
                    <img alt={pet.name} src={`https://s3.amazonaws.com/kbpet-images/${pet.filename}`}/>
                    <Link to={`/pets/${pet._id}`}><h3>{pet.name}</h3></Link>
                </div>
            );
        });
    }

    render() {
        // console.log(this.props.pets);
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