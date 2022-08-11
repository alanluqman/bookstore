/* eslint-disable react/prop-types */

function Book(props) {
  const { title, author } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

export default Book;
