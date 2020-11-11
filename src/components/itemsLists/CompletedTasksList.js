import React, { Component } from 'react';
import CurrentTask from '../items/CurrentTask';
import { connect } from 'react-redux';

import './CompletedTasksList.css';

class CompletedTasksList extends Component {
    render() {

        let completedList = this.props.todo.map( (item)=> {
            if (item.isComplete){
                return (
                    <CurrentTask
                        key = {item.id}
                        todo = {item}
                    />);
            }
            return null;
        });

        return (
            <div className="completed-tasks-list">
                <h1 className="completed-tasks-list__title">Completed task</h1>
                {completedList}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
      todo: state.todo,
    }
  }
  
  export default connect(mapStateToProps, null)(CompletedTasksList);
  