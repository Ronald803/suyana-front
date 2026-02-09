import { BrowserRouter, Outlet, useRoutes } from "react-router-dom";
import "./App.css";
import EmployeesPage from "./components/pages/EmployeesPage";
import HomePage from "./components/pages/HomePage";
import PatientsPage from "./components/pages/PatientsPage";
import Navbar from "./components/organisms/Navbar";
import NewEmployeePage from "./components/pages/NewEmployeePage";
import PatientDetailPage from "./components/pages/PatientDetailPage";
import EmployeeDetailPage from "./components/pages/EmployeeDetailPage";
import SchedulePage from "./components/pages/SchedulePage";
import LoginForm from "./components/molecules/LoginForm";

const AppRoutes = () => {
  return useRoutes([
    {
      element: <LayoutWithNavbar />,
      children: [
        { path: "/calendar", element: <SchedulePage /> },
        { path: "/patients", element: <PatientsPage /> },
        { path: "/patients/:patiendId", element: <PatientDetailPage /> },
        { path: "/employees", element: <EmployeesPage /> },
        { path: "/employees/:employeeId", element: <EmployeeDetailPage /> },
        { path: "/new-user", element: <NewEmployeePage /> },
      ],
    },
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginForm /> },
  ]);
};

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default App;
