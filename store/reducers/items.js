import * as actionTypes from '../actions/actionTypes';
import uuid from 'js-uuid';

const initialState = { 
    items: [
        {
            title: "Zrób zakupy",
            description: "Piwo, piwo, cydr i szampan",
            date: new Date(),
            photo: null,
            friend: null,
            id: uuid(),
            notification: true,
            datePicker: false,
            important: false
        }
    ]
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITEMS_SUCCESS: {
            return {
                ...state, 
                items: action.items
            }
        }
        case actionTypes.TOGGLE_DATE_PICKER: 
            return {
                ...state,
                items: state.items.map(item => item.id === action.id ? {...item, datePicker: !item.datePicker} : {...item})
            }
        case actionTypes.ADD_ITEM: 
            return { 
                ...state,
                items: [...state.items, action.newItem]
            }
        case actionTypes.DELETE_ITEM: 
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            }
        default: 
            return state
    }
}

export default itemsReducer;