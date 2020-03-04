import React, { Component } from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';
import styles from './Dnd.module.css'
const droppableStyle ={
    backgroundColor:'#555',
    width:'250px',
    height:'400px',
    margin:'32px'
}

class DndTest extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Droppable id="dr1" style={droppableStyle}>
                    <Draggable id={"item1"}><div className={styles.item} style={{margin:'8px'}}>some text</div></Draggable>
                    <Draggable id={"item2"}><div className={styles.item} style={{margin:'8px'}}>some other texttt</div></Draggable>
                    <Draggable id={"item3"}><div className={styles.item} style={{margin:'8px'}}>##################</div></Draggable>
                    <Draggable id={"item4"}><div className={styles.item} style={{margin:'8px'}}>1234</div></Draggable>
                </Droppable>
            
                <Droppable id="dr2" style={droppableStyle}>
                    <Draggable id={"item5"}><div className={styles.item} style={{margin:'8px'}}>some text</div></Draggable>
                    <Draggable id={"item6"}><div className={styles.item} style={{margin:'8px'}}>some other texttt</div></Draggable>
                    <Draggable id={"item7"}><div className={styles.item} style={{margin:'8px'}}>##################</div></Draggable>
                    <Draggable id={"item8"}><div className={styles.item} style={{margin:'8px'}}>1234</div></Draggable>
                </Droppable>
            </div>
        );
    }
}

export default DndTest;