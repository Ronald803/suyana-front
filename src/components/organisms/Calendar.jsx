import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import useGetResourceHook from "../../api/useGetResourceHook";

dayjs.locale("es");

function CalendarComponent() {
  const localizer = dayjsLocalizer(dayjs);
  const { dataResource: events, loading } = useGetResourceHook(
    "appointment",
    ""
  );
  return (
    <Calendar
      events={
        loading
          ? []
          : events?.map((event) => {
              return {
                start: dayjs(event.start).toDate(),
                end: dayjs(event.end).toDate(),
                title: `${event.patient} (${event.specialty})`,
              };
            })
      }
      localizer={localizer}
      min={dayjs("2024-08-30T08:00:00").toDate()}
      max={dayjs("2024-08-30T20:00:00").toDate()}
      messages={{
        month: "Mes",
        week: "Semana",
        day: "Día",
        today: "Hoy",
        previous: "Ant.",
        next: "Sig.",
      }}
    />
  );
}

export default CalendarComponent;

// const eventsFake = [
//   {
//     start: dayjs("2024-08-30T10:00").toDate(),
//     end: dayjs("2024-08-30T11:00").toDate(),
//     title: "Evento numero 1",
//   },
// ];
