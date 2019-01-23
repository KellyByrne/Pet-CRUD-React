// import _ from 'lodash';
import pets from '../apis/pets';
import history from '../history';
import {
    CREATE_PET,
    FETCH_PETS,
    FETCH_PET,
    EDIT_PET,
    DELETE_PET
} from './types';

export const fetchPets = () => async (dispatch) => {
    const response = await pets.get('/pets');
    dispatch({type: FETCH_PETS, payload: response.data});
};

export const createPet = (formValues) => async (dispatch) => {
    const response = await pets.post('/pets', {...formValues});
    dispatch({type: CREATE_PET, payload: response});
    history.push('/');
};

export const fetchPet = (id) => async (dispatch) => {
    const response = await pets.get(`/pets/${id}`);
    dispatch({type: FETCH_PET, payload: response.data});
};

export const editPet = (id, formValues) => async (dispatch) => {
    const response = await pets.post(`/pets/${id}/edit`, formValues);
    dispatch({type: EDIT_PET, payload: response});
    history.push('/');
};

export const deletePet = (id) => async (dispatch) => {
    const response = await pets.delete(`/pets/${id}/delete`);
    dispatch({type: DELETE_PET, payload:response});
    history.push('/');
};

