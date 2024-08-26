import { useEffect, useState } from 'react'
import EmployeeDetails from '../organisms/EmployeeDetails';

function EmployeeDetailPage() {
  const [employee, setEmployee] = useState(null)
  useEffect(() => {
    setEmployee(JSON.parse(localStorage.getItem('employee')))
  }, [])
  return (
    <div>
      <EmployeeDetails employee={employee} />
    </div>
  )
}

export default EmployeeDetailPage