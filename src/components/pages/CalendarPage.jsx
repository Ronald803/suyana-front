import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function CalendarPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('t')
    if (token.length < 1) {
      navigate('/')
    }
  }, [])
  return (
    <div>CalendarPage</div>
  )
}

export default CalendarPage