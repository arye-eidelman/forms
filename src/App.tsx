import React from "react";
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/forms/new">New Form</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
