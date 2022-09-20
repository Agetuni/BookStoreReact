const createBook = (data) => {
  const { title, author, genre } = data;
  return {
    id: title,
    title,
    genres: genre,
    authors: author,
    completed: 0,
    currentChapter: 'Hello',
  };
};
export default createBook;
