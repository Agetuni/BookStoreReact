import './category.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  const status = useSelector((state) => state.category);
  return (
    <div className="">
      <button type="button" className="check-status" onClick={handleStatus}>
        Check Status
      </button>
      <h2>
        {status}
      </h2>
    </div>
  );
};
export default Category;
