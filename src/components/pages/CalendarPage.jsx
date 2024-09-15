import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from "dayjs"
import "dayjs/locale/es"
import CalendarComponent from "../organisms/Calendar"

dayjs.locale("es")

function CalendarPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('t')
    if (token.length < 1) {
      navigate('/')
    }
  }, [])
  return (
    <div>
      <div className="w-96 h-screen">
        <CalendarComponent/>
      </div>
    </div>
  )
}

export default CalendarPage