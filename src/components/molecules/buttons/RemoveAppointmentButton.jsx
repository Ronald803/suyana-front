import { useEffect } from "react";
import useDeleteResourceHook from "../../../api/useDeleteResourceHook";
import MainOptionButton from "../../atoms/MainOptionButton";

export const RemoveAppointmentButton = ({
  isAdmin,
  setIsOpen,
  appointment,
}) => {
  const { deleteResource, isLoading, isError, isSuccessful } =
    useDeleteResourceHook();
  useEffect(() => {
    if (!isLoading && isSuccessful) {
      setIsOpen(false);
    }
  }, [isLoading, isSuccessful]);
  if (!isAdmin) return null;
  const handleRemoveAppointment = () => {
    deleteResource("appointment", appointment.appointmentId);
  };
  return (
    <MainOptionButton
      buttonText="Eliminar Reserva"
      onClick={handleRemoveAppointment}
    />
  );
};
