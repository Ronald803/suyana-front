import { useEffect } from "react"
import LoginForm from "../molecules/LoginForm"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('t')
    if(token.length > 0){
      navigate('/calendar')
    }
  },[])
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default HomePage