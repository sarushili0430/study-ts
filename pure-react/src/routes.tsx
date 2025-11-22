import { Routes, Route } from "react-router";
import App from "./features/app/App";
import { Todo } from "./features/todo/Todo";
import { Home } from "@/features/home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default AppRoutes;
