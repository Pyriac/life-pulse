import myAxios from "./myAxios";

const AllNotesLoader = async () => {
  const response = await myAxios.get("/api/notes", { withCredentials: true });
  return response.data;
};

const notesLoader = {
  AllNotesLoader,
};

export default notesLoader;
