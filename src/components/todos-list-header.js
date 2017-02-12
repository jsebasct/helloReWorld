import React from "react";



export default class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <td>Task</td>
                    <td>Action</td>
                </tr>
            </thead>
        );
    }
}