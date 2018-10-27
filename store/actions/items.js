import * as actionTypes from './actionTypes';

export const fetchItems = () => ({
    type: actionTypes.FETCH_ITEMS
});

export const fetchItemsSuccess = items => ({
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items
});

export const toggleDatePicker = id => ({
    type: actionTypes.TOGGLE_DATE_PICKER,
    id
});

export const deleteItem = id => ({
    type: actionTypes.DELETE_ITEM,
    id
});

export const addItem = newItem => ({
    type: actionTypes.ADD_ITEM,
    newItem
});

