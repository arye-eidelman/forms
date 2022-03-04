import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const App: FC = () => {
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
