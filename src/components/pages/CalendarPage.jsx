import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import CalendarComponent from "../organisms/Calendar";
import CalendarFilters from "../organisms/CalendarFilters";
import useGetResourceHook from "../../api/useGetResourceHook";

dayjs.locale("es");

function CalendarPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { dataResource: events, loading } = useGetResourceHook(
    "appointment",
    query
  );
  useEffect(() => {
    const token = localStorage.getItem("t");
    if (token.length < 1) {
      navigate("/");
    }
  }, []);
  return (
    <div className="md:flex">
      <div className="md:w-1/3">
        <CalendarFilters setQuery={setQuery} />
      </div>
      <div className="md:w-2/3">
        <CalendarComponent events={events} loading={loading} />
      </div>
    </div>
  );
}

export default CalendarPage;
