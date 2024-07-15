

import { ADD_CONTACT, ADD_CONTACTS_SUCCESS, DELETE_CONTACT, ERROR, LOADING, SINGLE_CONTACT, UPDATE_CONTACT } from "../Action/contectAction";

const initialState = {
    contact: null,
    contacts: [],
    isLoading: false,
    error: null
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                isLoading: false
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                isLoading: false
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
                isLoading: false
            };
        case SINGLE_CONTACT:
            return {
                ...state,
                contact: action.payload,
                isLoading: false
            };
        case ADD_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.payload,
                isLoading: false
            };
        case LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default contactReducer;
