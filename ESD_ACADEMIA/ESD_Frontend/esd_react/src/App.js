import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import TimeTable from './pages/TimetableDisplay';
import Students from "./pages/StudentsDisplay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const onLoginSuccess = (data) => {
  console.log("Login successful:", data);
  
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Login onLoginSuccess={onLoginSuccess} /></div>,
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
