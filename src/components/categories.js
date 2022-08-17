import { useDispatch, useSelector } from 'react-redux';
import { underConstruction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  return (
    <>
      <button type="button" onClick={() => dispatch(underConstruction())}>Check Status</button>
      <div>
        <h1>{(category === []) ? 'Under Construction !' : category}</h1>
      </div>
    </>
  );
}

export default Categories;
