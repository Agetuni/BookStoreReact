const initalState = { categories: [] };

// actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const statusAction = () => 'Under construction';
const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS: return statusAction();
    default: return state;
  }
};

const checkStatus = () => ({ type: CHECK_STATUS });

export default reducer;
export { checkStatus };
