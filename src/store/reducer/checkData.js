import CheckDataAction from '../actions/checkDataAction';

const INITIAL_STATE = {
    currentData: ''
}

export default function checkData(state=INITIAL_STATE,action){
        switch(action.type){
            case CheckDataAction.FETCHAPI:
            // return {sampleData:action.payload};
            return Object.assign({},state,{currentData: action.payload})
            default:
            return state;
        }
}