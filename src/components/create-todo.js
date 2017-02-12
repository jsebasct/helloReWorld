
import React from "react";


export default class TodosList extends React.Component {

    render() {

        return (
            <form onSubmit={this.handlerCreate.bind(this)}>
                <input type="text"
                       placeholder="What do I need to do?"
                       ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }

    handlerCreate(event) {
        event.preventDefault();
        console.log(this.refs.createInput.value);

        this.props.createTask( this.refs.createInput.value );
        this.refs.createInput.value = '';
    }
}