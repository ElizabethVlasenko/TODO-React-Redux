import React, { Component } from 'react';
import CurrentTask from '../items/CurrentTask';
import CompletedTasksList from './CompletedTasksList';
import { connect } from 'react-redux';

import './CurrentTasksList.css';


class CurrentTasksList extends Component {
    render() {

        let list = this.props.todo.map( (item)=> {
            if (!item.isComplete)
                return (
                    <CurrentTask
                        key = {item.id}
                        todo = {item}
                    />);
            return null;
        });

        return (
            <div className="current-tasks-list">
               {this.props.todo.length === 0 
                ?<div className="current-tasks-list__no-item no-item-container">
                    <p className="no-item-container__text">No task available</p>
                </div>
                :list
                }
                {this.props.todo.length !== list.filter(item => item !== null).length
                ? <CompletedTasksList/>
                : null
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
      todo: state.todo,
    }
  }
  
  export default connect(mapStateToProps, null)(CurrentTasksList);
  