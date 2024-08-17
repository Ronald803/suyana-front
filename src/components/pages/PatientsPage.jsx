import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NewPatientForm from '../molecules/NewPatientForm'

function PatientsPage() {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('t')
    if(token.length<1){
      navigate('/')
    }
  },[])
  return (
    <div>
      <NewPatientForm/>
    </div>
  )
}

export default PatientsPage