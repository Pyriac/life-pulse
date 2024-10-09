import { Outlet } from "react-router-dom";

import "./assets/styles/root.css";
import "./assets/styles/home.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
