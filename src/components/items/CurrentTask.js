import React, { Component } from 'react';
import { todoDelete, todoComplete } from '../../store/actionCreators/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './CurrentTask.css';

class CurrentTask extends Component {

    delete (e) {
        e.preventDefault();
        this.props.todoDelete(this.props.todo.id)
    }
    complete (e) {
        e.preventDefault();
        this.props.todoComplete(this.props.todo.id)
    }

    render() {
        return (
            <div className="current-task">
                <span 
                    className={
                        this.props.todo.isComplete 
                        ? "current-task__information complete"
                        : "current-task__information"
                    }>
                        {this.props.todo.name} 
                        &nbsp;/&nbsp;
                        {this.props.todo.date.toLocaleString()}
                </span>
                { !this.props.todo.isComplete ?
                <div className="current-task__btn-container">
                    <button 
                        className="current-task__delete-button"
                        onClick={e => this.delete(e)}
                    >Delete</button>
                    <button 
                        className="current-task__complete-button"
                        onClick={e => this.complete(e)}
                    >Complete</button> 
                </div>
                :null               
            }
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ todoDelete, todoComplete }, dispatch);
}

export default connect(null, mapDispatchToProps)(CurrentTask)
