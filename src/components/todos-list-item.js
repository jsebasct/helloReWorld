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
                <td> {this.props.task} </td>
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