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
                <h1>React ToDOS App 2</h1>
                <CreateTodo
                    todos = {this.state.todos}
                    createTask = {this.createTask.bind(this)}
                />
                <TodosList
                    todos={this.state.todos}
                    toogleTask={this.toogleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
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

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task===oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(task2Delete) {
        _.remove(this.state.todos, todo => todo.task === task2Delete);
        this.setState({todos: this.state.todos});
    }
}