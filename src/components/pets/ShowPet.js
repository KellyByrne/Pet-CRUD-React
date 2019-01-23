import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPet} from '../../actions';

class ShowPet extends React.Component {
    componentDidMount() {
       this.props.fetchPet(this.props.match.params.id)
    }

    render() {
        if (!this.props.pet) {
            return <div>Loading...</div>
        }
    
        const {_id, name, bio, likes, dislikes, filename} = this.props.pet;

        return (
            <div>
                <img alt={name} src={`https://s3.amazonaws.com/kbpet-images/${filename}`}/>
                <h2>{name}</h2>
                <p>{bio}</p>
                <p>Likes: {likes}</p>
                <p>Dislikes: {dislikes}</p>
                <Link to={`/pets/edit/${_id}`} className="btn btn-primary">Edit</Link>
                <Link to={`/pets/delete/${_id}`} className="btn btn-danger">Delete</Link>
            </div>

        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {pet: state.pets[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPet})(ShowPet);