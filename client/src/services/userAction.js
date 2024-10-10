import myAxios from "./myAxios";

const userActions = async ({ request }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post(`/api/user`, {
          email: formData.get("email"),
          password: formData.get("password"),
          confirmPassword: formData.get("confirmPassword"),
        });
        if (response.status === 201) {
          return new Response("Votre compte est bien créé");
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

export default userActions;
