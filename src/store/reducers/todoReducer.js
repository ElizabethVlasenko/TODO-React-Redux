function todoReducer ( state=[], action) {
    switch (action.type) {
        case 'TODO_ADD': {
            return [
                ...state,
                {
                    ...action.payload,
                    id: action.id,
                    isComplete: false,
                }
            ];
        }
        case 'TODO_DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'TODO_COMPLETE':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        isComplete: true,
                    }
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todoReducer;