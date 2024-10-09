import myAxios from "./myAxios";

const AllNotesLoader = async () => {
  const response = await myAxios.get("/api/notes");
  return response.data;
};

const notesLoader = {
  AllNotesLoader,
};

export default notesLoader;
