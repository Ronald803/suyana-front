import React from "react";
import { ReportForm } from "./ReportForm";
import { useAuth } from "../../hooks/useAuth";
import { RemoveAppointmentButton } from "./buttons/RemoveAppointmentButton";

function AppointmentSelected({ cellSelected, setIsOpen }) {
  const { day, hour, appointment } = cellSelected;
  const { isAdmin, userName } = useAuth();

  return (
    <div className="max-w-96 p-4 border rounded-lg">
      <div>
        <div className="flex pt-1">
          <p className="w-1/3 font-medium">Día</p>
          <p className="w-2/3">{day?.name}</p>
        </div>
        <div className="flex pt-1">
          <p className="w-1/3 font-medium">Hora</p>
          <p className="w-2/3">{appointment.startEndHour}</p>
        </div>
        <div className="flex pt-1">
          <p className="w-1/3 font-medium">Especialidad</p>
          <p className="w-2/3">{appointment.specialtyName}</p>
        </div>
        <div className="flex pt-1">
          <p className="w-1/3 font-medium">Paciente</p>
          <p className="w-2/3">{appointment.patientName}</p>
        </div>
        <div className="flex pt-1">
          <p className="w-1/3 font-medium">Terapeuta</p>
          <p className="w-2/3">{appointment.doctorName}</p>
        </div>
        <ReportForm
          appointment={appointment}
          day={day}
          isAdmin={isAdmin}
          userName={userName}
          setIsOpen={setIsOpen}
        />
      </div>
      <RemoveAppointmentButton
        appointment={appointment}
        isAdmin={isAdmin}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default AppointmentSelected;
