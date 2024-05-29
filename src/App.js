import { RouterProvider } from "react-router-dom";
import React from "react";

import router from "./routes";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
    </div>
  );
}

export default App;
