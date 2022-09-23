import { v4 as uuid } from 'uuid';

const createBook = (data) => {
  const { title, author } = data;
  return {
    id: uuid(),
    title,
    author,
  };
};
export default createBook;
