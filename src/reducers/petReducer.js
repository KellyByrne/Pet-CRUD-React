import _ from 'lodash';
import {
    CREATE_PET,
    FETCH_PETS,
    FETCH_PET,
    EDIT_PET,
    DELETE_PET
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_PETS:
            return {...state,  ..._.mapKeys(action.payload, '_id')};
        case FETCH_PET:
            return {...state, [action.payload._id]: action.payload};
        case CREATE_PET:   
            return {...state, [action.payload._id]: action.payload};
        case EDIT_PET:
            return {...state, [action.payload._id]: action.payload};
        case DELETE_PET:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}