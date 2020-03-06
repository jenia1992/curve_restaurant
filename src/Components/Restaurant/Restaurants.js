import React from 'react';
import styles from './Restaurant.module.css'
const Restaurants = (props) => {
    return (<div className={"col align-center"}>
        <h1>Restaurants</h1>
        <ul className={styles.restaurant__List}>
            {
                props.restaurantsArr && props.restaurantsArr.map(restaurant=>{
                    if(restaurant.menu_item && restaurant.menu_item.length!==0){
                        return (
                            <li 
                            value={restaurant.restaurant_id} 
                            key={restaurant.restaurant_id}
                            onClick={props.clickHandler}
                            >{restaurant.restaurant_name}</li>
                            )
                    }
                    else return
                })
            }
        </ul>
    </div>
        
    );
};

export default Restaurants;