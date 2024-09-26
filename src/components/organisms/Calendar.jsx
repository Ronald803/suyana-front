import PropTypes from "prop-types";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { options } from "../../global";

dayjs.locale("es");

function CalendarComponent(props) {
  const localizer = dayjsLocalizer(dayjs);

  const EventComponent = (eventProps) => {
    const found = options.specialties.find(
      (specialty) => specialty.value == eventProps.event.specialty
    );
    return (
      <div className={`bg-${found.color} text-center`}>
        <p className="">{`${eventProps.event.title} - ${found.name}`}</p>
      </div>
    );
  };

  EventComponent.propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
    }).isRequired,
  };

  const components = {
    event: EventComponent,
  };

  return (
    <div className="flex justify-center">
      <div className="w-svw h-screen">
        <Calendar
          events={
            props.loading
              ? []
              : props.events?.map((event) => {
                  return {
                    start: dayjs(event.start).toDate(),
                    end: dayjs(event.end).toDate(),
                    title: `${event.patient}`,
                    specialty: event.specialty,
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
          components={components}
          views={["week", "day", "agenda"]}
          defaultView="week"
        />
      </div>
    </div>
  );
}

export default CalendarComponent;

CalendarComponent.propTypes = {
  loading: PropTypes.bool,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      patient: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
    })
  ),
};
