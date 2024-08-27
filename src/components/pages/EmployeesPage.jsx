import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import EmployeesGrid from "../organisms/EmployeesGrid"
import AddNewEmployeeOption from "../organisms/AddNewEmployeeOption"

function EmployeesPage() {
  const navigate = useNavigate()
  const [rol, setRol] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('t')
    setRol(localStorage.getItem('r'))
    if (token.length < 1) {
      navigate('/')
    }
  }, [])
  return (
    <div className="flex justify-center">
      <div>
        <EmployeesGrid />
        {
          rol == "administrador"
          &&
          <AddNewEmployeeOption />
        }
      </div>
    </div>
  )
}

export default EmployeesPage