function NewBook() {
  return (
    <>
      <form>
        <input type="text" placeholder="Book name" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default NewBook;
