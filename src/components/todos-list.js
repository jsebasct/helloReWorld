import _ from 'lodash'
import React from "react";
import TodoListHeader from "./todos-list-header";
import TodoListItem from "./todos-list-item";


export default class TodosList extends React.Component {

    renderItems() {

        const props = _.omit(this.props, 'todos');

        var x = _.map(this.props.todos,
            (todo, index) =>
            <TodoListItem key={index}
                {...todo}
                {...props}
            />);

        //console.log(x);

        return x;
    }

    render() {

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