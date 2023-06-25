import api from "../../apiService";

const fetchBooks = async ({ pageNum, limit, query }) => {
  try {
    let url = `books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;
    const response = await api.get(url);
    return response;
  } catch (error) {
    return error;
  }
};
export default fetchBooks;
