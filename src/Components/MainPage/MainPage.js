import React, { Component } from 'react';
import {getDataFromServer} from '../../ManagerAxios/ManagerAxios'
class MainPage extends Component {
    componentDidMount(){
        let data = {
            url: "http://3.222.204.208/restaurants_list",
            method: "post",
            data: {
   
                "app_key": `${process.env.REACT_APP_CURVE_API_KEY}`
                
            },
            headers: "",
            params: ""
        }

        getDataFromServer(data).then(res => {
            console.log(res);
            
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h1>Main Page</h1>
            </div>
        );
    }
}

export default MainPage;