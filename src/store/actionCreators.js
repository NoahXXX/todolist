import { CANGE_INPUT, ADD_ITEM, DELETE_ITEM, } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CANGE_INPUT,
    value,
})

export const getAddItemAction = () => ({
    type: ADD_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index,
})