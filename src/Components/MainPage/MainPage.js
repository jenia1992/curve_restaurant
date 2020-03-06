import React, { Component } from 'react';
import Restaurants from '../Restaurant/Restaurants'
import { connect } from 'react-redux';
class MainPage extends Component {
    componentDidMount(){
        console.log("ComponentDidMount Main Page");
        
       
    }
    // this.props.restaurantsArr.filter(restaurant=>{
    //     return restaurant.restaurant_id === e.target.value
    // })[0]
    onClickHandler=(e)=>{
        this.props.history.push({
            pathname:`/details/${e.target.value}`,
            state:{restaurant_id:e.target.value},
            
        })
        
    }
    render() {
        return (
            <div >
                
                <Restaurants clickHandler={this.onClickHandler} restaurantsArr={this.props.restaurantsArr}/>
            </div>
        );
    }
}
const mapStateToProps =state=>{
    return {
        restaurantsArr:state.restaurants.restaurantsArr
    }
  }
export default connect(mapStateToProps) (MainPage);