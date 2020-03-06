import axios from "axios";

export const getDataFromServer=(data)=>{
    if(data.method === "get"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }
    else if(data.method==="post"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }
    else if(data.method==="DELETE"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }
    else if(data.method==="PUT"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }

}

export const jsonHandler=(jsonData)=>{
    try {
        //Fix the Json replace the NaN without brackets
    const result = JSON.parse(jsonData.replace(/\bNaN\b/g, '"***NaN***"'), (key, value)=> {
        return value === "***NaN***" ? NaN : value;
    });
    // console.log(result.menu_item);
    return result
    } catch (error) {
        // empty array
        // console.log(jsonData.menu_item);
        return jsonData
    }
}