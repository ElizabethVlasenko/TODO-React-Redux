export function todoAdd (todo, id) {
    return {
        type:'TODO_ADD',
        payload: todo,
        id: id,
    }
}

export function todoDelete (id) {
    return {
        type:'TODO_DELETE',
        id: id,
    }
}

export function todoComplete (id) {
    return {
        type:'TODO_COMPLETE',
        id: id,
    }
}
