import React from "react";
import TodosList from "./todos-list";
import CreateTodo from './create-todo';

const todos = [
    {
        task: 'Make React Tutorial',
        isCompleted: false
    },
    {
        task: 'Eat Dinner',
        isCompleted: true
    }
];

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <h1>React ToDOS App</h1>
                <CreateTodo createTask = {this.createTask.bind(this)}/>
                <TodosList
                    todos={this.state.todos}
                    toogleTask={this.toogleTask.bind(this)}
                />
            </div>
        );
    }

    toogleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task===task);
        foundTodo.isCompleted =  !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    createTask(task) {
        this.state.todos.push(
          {
            task,
            isCompleted: false
          }
        );
        this.setState({todos: this.state.todos});
    }
}