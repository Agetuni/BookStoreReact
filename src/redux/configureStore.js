const ADD = "ADD";
const REMOVE = "REMOVE";
const initialState = {
  books: [],
};

const reducer = (state=initialState, action={}) =>{
    switch(action.type){
        case ADD: return '';
        case REMOVE : return '';
        default : return state;
    }
}

const addBoook = (data) => ({type:ADD,data});
const removeBook =(bookId)=>({type:REMOVE,bookId});

export {addBoook,removeBook};
export default reducer;