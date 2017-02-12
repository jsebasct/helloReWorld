import _ from 'lodash'
import React from "react";
import TodoListHeader from "./todos-list-header";
import TodoListItem from "./todos-list-item";


export default class TodosList extends React.Component {

    renderItems() {
        return _.map(this.props.todos,
            (todo, index) => <TodoListItem key={index} {...todo} />);
    }

    render() {

        console.log(this.props);

        return (
            <table>
                <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}