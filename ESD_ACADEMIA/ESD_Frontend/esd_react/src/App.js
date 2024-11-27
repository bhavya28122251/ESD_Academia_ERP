import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import TimeTable from './pages/TimetableDisplay';
import Students from "./pages/StudentsDisplay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/TimeTable",
    element: <TimeTable />,
  },
  {
    path: "/",
    element: <Students />,
  },
]);

function App() {
  return (
    <div className="App">
      
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
