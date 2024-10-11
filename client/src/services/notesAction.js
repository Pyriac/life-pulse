import { json, redirect } from "react-router-dom";
import myAxios from "./myAxios";

const notesAction = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post(
          `/api/notes`,
          {
            sport: formData.get("sport"),
            sleep: formData.get("sleep"),
            mental: formData.get("mental"),
            date: formData.get("date"),
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          return json({ message: "C'est bien noté, à demain !" });
        }
      } catch (error) {
        return error.response.data;
      }
      return new Response("Il y a comme un problème imprévu, je crois");
    }
    case "put": {
      try {
        const response = await myAxios.put(
          `/api/notes/${params.id}`,
          {
            sport: formData.get("sport"),
            sleep: formData.get("sleep"),
            mental: formData.get("mental"),
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 204) {
          return json({ message: "C'est bien noté, à demain !" });
        }
      } catch (error) {
        return error.response.data;
      }
      return new Response("Il y a comme un problème imprévu, je crois");
    }
    case "delete": {
      await myAxios.delete(`/api/notes/${params.id}`);

      return redirect("/");
    }

    default:
      return new Response(
        "Il semble que tu essaies de forcer la database... Vas t-en de là !"
      );
  }
};

export default notesAction;
