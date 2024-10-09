import { Outlet } from "react-router-dom";

import "./assets/styles/root.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
