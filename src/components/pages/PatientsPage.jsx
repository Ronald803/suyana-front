import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NewPatientForm from '../molecules/NewPatientForm'
import PatientsGrid from "../organisms/PatientsGrid"

function PatientsPage() {
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
        <PatientsGrid />
        {
          rol == "administrador"
          &&
          <NewPatientForm />
        }
      </div>
    </div>
  )
}

export default PatientsPage