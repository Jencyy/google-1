import axios from 'axios';
import { ref, uploadBytes } from 'firebase/storage';
import generateUniqueId from 'generate-unique-id';
import { storage } from '../../firebase';




// Action Types

export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SINGLE_CONTACT = 'SINGLE_CONTACT';
export const ADD_CONTACTS_SUCCESS = 'ADD_CONTACTS_SUCCESS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';



// Action Creators
export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
});

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

export const singleContact = (contact) => ({
    type: SINGLE_CONTACT,
    payload: contact,
});

export const loading = () => ({
    type: LOADING,
});

export const error = (message) => ({
    type: ERROR,
    payload: message,
});

export const addContactsSuccess = (contacts) => ({
    type: ADD_CONTACTS_SUCCESS,
    payload: contacts,
});

// Async Action Creators
export const addContactAsync = (contact) => {
    return (dispatch) => {
        dispatch(loading());
        contact.id = generateUniqueId({
            length: 24,
            useLetters: true,
            useNumbers: true
        });
        axios.post('http://localhost:3007/contacts', contact)
        .then(() => dispatch(getContactsAsync()))
        .catch((err) => dispatch(error(err.message)));
    };
};

export const getContactsAsync = () => {
    return (dispatch) => {
        dispatch(loading());
        axios.get('http://localhost:3007/contacts')
        .then((res) => dispatch(addContactsSuccess(res.data)))
        .catch((err) => dispatch(error(err.message)));
    };
};

export const deleteContactAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3007/contacts/${id}`)
        .then(() => dispatch(getContactsAsync()))
        .catch((err) => dispatch(error(err.message)));
    };
};

export const singleContactAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        axios.get(`http://localhost:3007/contacts/${id}`)
        .then((res) => dispatch(singleContact(res.data)))
        .catch((err) => dispatch(error(err.message)));
    };
};

export const updateContactAsync = (contact) => {
    return (dispatch) => {
        axios.put(`http://localhost:3007/contacts/${contact.id}`, contact)
        .then(() => dispatch(getContactsAsync()))
        .catch((err) => dispatch(error(err.message)));
    };
};

export const uploadImg = (file) => {
    
    return (dispatch) => {
        const storageRef = ref(storage, `img/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
           
        }).catch((err) => {
            console.error("Error uploading file: ", err);
        });
    };
}



