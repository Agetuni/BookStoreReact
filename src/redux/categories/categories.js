const initalState = {categories:[]};

//actions
const CHECKSTATUS ='CHECKSTATUS ';
const action =()=>'Under construction';
const reducer = (state=initalState, action={})=>{
    switch(action.type){
        case CHECKSTATUS : return action();
        default : return state;
    }
}

const checkStatus =() => ({type:CHECKSTATUS});

export default reducer;
export {checkStatus};