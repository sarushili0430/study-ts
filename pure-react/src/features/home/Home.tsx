import { NavLink } from "react-router";

export function Home() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <br />
      <NavLink to="/app">App</NavLink>
      <br />
      <NavLink to="/todo">Todo</NavLink>
    </nav>
  );
}
