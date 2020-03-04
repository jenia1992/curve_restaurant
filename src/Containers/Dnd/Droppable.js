import React, { Component } from 'react';

class Droppable extends Component {
    dropHandler = (event) =>{
        event.preventDefault()
        const data = event.dataTransfer.getData('transfer');
        event.target.appendChild(document.getElementById(data))
    }
    allowDropHandler=(event)=>{ 
        event.preventDefault()
    }
    render() {
        return (
            <div 
            id={this.props.id} 
            onDrop={this.dropHandler}
            onDragOver={this.allowDropHandler}
            style={this.props.style}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Droppable;