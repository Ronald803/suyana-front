import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import CalendarPage from './components/pages/CalendarPage'
import EmployeesPage from './components/pages/EmployeesPage'
import HomePage from './components/pages/HomePage'
import PatientsPage from './components/pages/PatientsPage'
import Navbar from './components/organisms/Navbar'
import NewEmployeePage from './components/pages/NewEmployeePage'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/calendar', element: <CalendarPage /> },
    { path: '/patients', element: <PatientsPage /> },
    { path: '/employees', element: <EmployeesPage /> },
    { path: '/new-user', element: <NewEmployeePage /> }
  ])
  return routes
}

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
