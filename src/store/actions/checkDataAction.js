import axios from 'axios';
export default class CheckDataAction {
    static FETCHAPI = 'FETCHAPI';
    
    static fetchAPI(value){
        console.log('value',value)
        return{
            type: CheckDataAction.FETCHAPI,
            payload: value
        }
    }
}