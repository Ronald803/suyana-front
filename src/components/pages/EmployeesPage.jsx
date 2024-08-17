import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function EmployeesPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('t')
    if (token.length < 1) {
      navigate('/')
    }
  }, [])
  return (
    <div>EmployeesPage</div>
  )
}

export default EmployeesPage