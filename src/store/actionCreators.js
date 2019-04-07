import {INIT_LIST_ACTION, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,} from './actionTypes'
import axios from "axios"
import store from "./index";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index,
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data,
})

export const getTodoList = (dispatch) => {
    return () => {
        axios.get('list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        })
    }
}