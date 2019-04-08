import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, } from './store/actionCreators'

class TodoList extends Component {
    render() {
        return(
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.changeInputChange}
                    />
                    <button onClick={this.props.addItem}>submit</button>
                </div>
                <ul>
                    {this.props.list.map((item, index) => {
                        return (
                            <li key={index}
                                onClick={() => {
                                    this.props.deleteItem(index)
                                }}
                            >{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputChange(e) {
            const action = getInputChangeAction(e.target.value)
            dispatch(action)
        },
        addItem() {
            const action = getAddItemAction()
            dispatch(action)
        },
        deleteItem(index) {
            const action = getDeleteItemAction(index)
            dispatch(action)
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)