import React from "react";


export default class TodosListItem extends React.Component {

    constructor() {
        super();
        this.state = {
            isEditing: false
        };
        console.log("TodosListItem");
        //console.log(this.props.task);
    }

    renderTaksSection() {

        const {task, isCompleted} = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        return (
            <td
                style = {taskStyle}
                onClick={this.props.toogleTask.bind(this, task)}
            >
                {task}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button >Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button >Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaksSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({isEditing: true});
    }

    onCancelClick() {
        this.setState({isEditing: false});
    }
}