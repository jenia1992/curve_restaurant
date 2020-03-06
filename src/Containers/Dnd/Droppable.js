import React from 'react';

const Droppable =(props)=> {
    const dropHandler = (event) =>{
        event.preventDefault()
        const data = event.dataTransfer.getData('transfer');
        console.log(document.getElementById(data));
        
        event.target.appendChild(document.getElementById(data))
    }
    const allowDropHandler=(event)=>{ 
        event.preventDefault()
    }
    
        return (
            <div 
            className={props.className}
            id={props.id} 
            onDrop={dropHandler}
            onDragOver={allowDropHandler}
            style={props.style}
            >
                <h1>{props.id}</h1>
                {props.children}
            </div>
        );
    
}

export default Droppable;