import { Outlet } from "react-router-dom";

import "./assets/styles/root.css";
import "./assets/styles/home.css";
import "./assets/styles/progress.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
