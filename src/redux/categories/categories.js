const initalState = { categories: [] };

// actions
const CHECKSTATUS = 'CHECKSTATUS ';
const statusAction = () => 'Under construction';
const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHECKSTATUS: return statusAction();
    default: return state;
  }
};

const checkStatus = () => ({ type: CHECKSTATUS });

export default reducer;
export { checkStatus };
