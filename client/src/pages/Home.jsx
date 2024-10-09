import { useLoaderData } from "react-router-dom";

export default function Home() {
  const notesData = useLoaderData();
  console.info(notesData);
  return <h1>Hello Wolrd</h1>;
}
