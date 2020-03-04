import React, { Component } from 'react';

class Draggable extends Component {
    dragHandler=(event)=>{ 
        event.dataTransfer.setData('transfer',event.target.id)
      }
      noAllowDropHandler =(event)=>{
        event.stopPropagation()
      }
    render() {
        return (
            <div 
            id={this.props.id} 
            draggable={true}
            onDragStart={this.dragHandler}
            onDragOver={this.noAllowDropHandler}>
               {this.props.children}
            </div>
        );
    }
}

export default Draggable;