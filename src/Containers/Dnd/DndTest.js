import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';
import styles from './Dnd.module.css'

const DndTest =({menuNames,restaurant,colors})=> {
    // console.log(colors);
   
        return (
            <div className={styles.wrapper}>

                {menuNames && menuNames.map((name,i)=>{
                     const droppableStyle ={
                        backgroundColor:colors[i],
                        
                    }
                    return(
                        <Droppable className={styles.droppableStyle} key={name} id={name} style={droppableStyle}>
                            {restaurant.menu_item && restaurant.menu_item.map(menuItem=>{
                                if(menuItem.menu_name===name){
                                    return (
                                        <Draggable id={name+Math.random(100*99)}>
                                            <div className={styles.item} style={{margin:'8px'}}>{menuItem.course_name}--${(Math.round(menuItem.price * 100) / 100).toFixed(2)}--</div>
                                        </Draggable>
                                        )
                                }
                            })}
                        </Droppable>
                    )
                })}
            </div>
        );
    
}

export default DndTest;