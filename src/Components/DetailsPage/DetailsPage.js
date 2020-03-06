import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loader from '../Loader/Loader'
import DndTest from '../../Containers/Dnd/DndTest'
class DetailsPage extends Component {
    state={
        restaurant:{
            restaurant_name:"Please choose a restaurant"
        }
    }
    render() {
        if(this.props.restaurant){
            return (
                <div className="text-center">
                    <h1>{this.props.restaurant&&this.props.restaurant.restaurant_name || "Please Choose a Restaurant" }</h1>
                    <DndTest colors={this.props.colors} menuNames={this.props.menuNames} restaurant={this.props.restaurant} />
                </div>
            );

        }else return (
            <div className="text-center">
                <h1>{this.props.restaurant&&this.props.restaurant.restaurant_name || "Please Choose a Restaurant" }</h1>
                <Loader/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //get restaurant by id that the component recive from params
    const id = ownProps.match.params.restaurant_id;
    const restaurant = state.restaurants.restaurantsArr.filter(restaurant=>{
        return restaurant.restaurant_id===parseInt(id)})[0]
    //array of menu names 
    const menuNames = []
    if(restaurant){
        restaurant.menu_item.forEach(menu=>{
            if(!menuNames.includes(menu.menu_name)){
                menuNames.push(menu.menu_name)
            }
        })
    }       
    return {
        restaurant,
        menuNames,
        colors:state.restaurants.colors,
    }
}
export default connect(mapStateToProps)(DetailsPage);