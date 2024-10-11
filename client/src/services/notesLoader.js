import myAxios from "./myAxios";

const AllNotesLoader = async () => {
  const response = await myAxios.get("/api/notes", { withCredentials: true });
  return response.data;
};
const NotesLoaderById = async ({ params }) => {
  const response = await myAxios.get(`/api/notes/${params.id}`);
  return response.data;
};

const notesLoader = {
  AllNotesLoader,
  NotesLoaderById,
};

export default notesLoader;
