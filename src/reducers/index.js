import {combineReducers} from 'redux';
import petReducer from './petReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    pets: petReducer,
    form: formReducer
});