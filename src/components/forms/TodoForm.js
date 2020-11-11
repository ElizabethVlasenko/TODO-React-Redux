import React, { Component } from 'react';
import { todoAdd } from '../../store/actionCreators/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Flatpickr from "react-flatpickr";

import "../../../node_modules/flatpickr/dist/themes/light.css";
import './TodoForm.css';
let counter = 0;
class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: null,
        }
    }
    change = (fieldName) => (event) => {
        const newState = Object.assign({}, this.state);
        newState[`${fieldName}`] = event.target.value;

        this.setState(newState);
    }
    submit (e) {
        e.preventDefault();
        this.props.todoAdd(this.state, counter++);
        this.setState({
            name: '',
            date: null,
        });
    }
    render() {
        return (
            <form
                className="todo-form"
                onSubmit={e => this.submit(e)}
            >
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.change('name')}
                    className="todo-form__input-text"
                    required
                    placeholder="Task name"
                />
                <Flatpickr
                    onChange={date => {
                        this.setState({date: date[0]});
                    }}
                    value={this.state.date}
                    className="todo-form__input-text"
                    placeholder="End date"

                    options={{ 
                        enableTime: true,
                        time_24hr: true,
                        dateFormat: "d.m.Y H:i",
                        minDate: "today",
                    }}
                />
                <button
                    className="todo-form__btn"
                    type="submit"
                    disabled={this.state.date === null 
                    ?"disabled"
                    :""
                    }
                >
                    Submit
                </button>
                
            </form>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ todoAdd }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoForm)