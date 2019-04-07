import React, {Component} from 'react'
import {Input, Button, List,} from 'antd'

const TodoListUI = (props) => {
    return (
        <div>
            <Input placeholder="Basic usage"
                   style={{width: '300px', margin: '10px'}}
                   value={props.inputValue}
                   onChange={props.handleInputChange}
            />
            <Button
                type="primary"
                onClick={props.handleBtnClick}
            >submit</Button>
            <List
                style={{width: '300px', marginLeft: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item
                    onClick={() => {
                        props.handleItemClick(index)
                    }}
                >{item}</List.Item>)}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <Input placeholder="Basic usage"
//                        style={{width: '300px', margin: '10px'}}
//                        value={this.props.inputValue}
//                        onChange={this.props.handleInputChange}
//                 />
//                 <Button
//                     type="primary"
//                     onClick={this.props.handleBtnClick}
//                 >submit</Button>
//                 <List
//                     style={{width: '300px', marginLeft: '10px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item
//                         onClick={() => {this.props.handleItemClick(index)}}
//                     >{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI