import React, { useEffect, useState } from "react";
import MainButtonForm from "../atoms/MainButtonForm";
import useDeleteResourceHook from "../../api/useDeleteResourceHook";

function AppointmentSelected({ cellSelected, setIsOpen }) {
  const { day, hour, appointment } = cellSelected;
  const { deleteResource, isLoading, isError, isSuccessful } =
    useDeleteResourceHook();
  const handleRemoveAppointment = () => {
    deleteResource("appointment", appointment.appointmentId);
  };
  useEffect(() => {
    if (!isLoading && isSuccessful) {
      setIsOpen(false);
    }
  }, [isLoading, isSuccessful]);
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
      </div>
      <MainButtonForm
        buttonText="Eliminar Reserva"
        onClick={handleRemoveAppointment}
      />
    </div>
  );
}

export default AppointmentSelected;
