import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const loginActions = async ({ request }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post(
          `/api/login`,
          {
            email: formData.get("email"),
            password: formData.get("password"),
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          return redirect("/");
        }
      } catch (error) {
        return error.response.data;
      }
      return new Response("Que fais-tu jambon ?");
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default loginActions;
