import { useDispatch } from 'react-redux';
import { underConstruction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(underConstruction)}>Check Status</button>
    </>
  );
}

export default Categories;
