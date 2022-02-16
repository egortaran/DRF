import React from 'react'


const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.is_active}</td>
            <td>{todo.project}</td>
            <td>{todo.creater}</td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
    return (
        <table>
            <tbody>
            <th>id</th>
            <th>text</th>
            <th>is_active</th>
            <th>project</th>
            <th>creater</th>

            {todos.map((todo) => <ToDoItem todo={todo}/>)}
            </tbody>
        </table>
    )
}


export default ToDoList
