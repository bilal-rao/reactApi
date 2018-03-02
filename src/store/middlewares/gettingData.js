import CheckDataAction from '../actions/checkDataAction';
import axios from 'axios';

export default class AccessTokenMiddleware {
    // static asyncAcces() {
    //     console.log('i am middleware')
    //     return (dispatch) => {
    //         axios.post('https://reqres.in/api/users')
    //         .then((data)=>
    //         {
    //             console.log('data',data)
    //             dispatch(CheckDataAction.fetchAPI(data))
    //         })
    //         // var params = new URLSearchParams();
    //         // params.append('grant_type', 'client_credentials');
    //         // params.append('client_id', 'mobileapp');
    //         // params.append('client_secret', 'secret');
    //         // axios.post('https://idssandbox.azurewebsites.net/connect/token', params)
    //         //     .then((data) => {
    //         //         console.log('data',data)
    //         //         // var base64Url = token.split('.')[1];
    //         //         // var base64 = base64Url.replace('-', '+').replace('_', '/');
    //         //         // return JSON.parse(window.atob(base64));
    //         //         dispatch(CheckDataAction.fetchAPI(data))
    //         //     })
    //     }
    // }
    static asyncAcces() {
        return (dispatch) => {
            axios.post('https://reqres.in/api/users')
            .then((data)=>dispatch(CheckDataAction.fetchAPI(data)))
            .catch((err)=>console.log(err))
        }
    }
}