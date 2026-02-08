import { useEffect, useState } from "react";
import OneLineLabelInput from "../atoms/OneLineLabelInput";
import MainButtonForm from "../atoms/MainButtonForm";
import usePostResourceHook from "../../api/usePostResourceHook";
import { doesDayMatchDate } from "../../utils/validators";
import successAlert from "../alerts/successAlert";
import errorAlert from "../alerts/errorAlert";

export const ReportForm = ({
  appointment,
  isAdmin,
  userName,
  day,
  setIsOpen,
}) => {
  const { postResource, isLoading, isError, isSuccessful } =
    usePostResourceHook();

  const [date, setDate] = useState("");
  const [progressNote, setProgressNote] = useState("");

  if (!appointment) return null;

  const canEdit = isAdmin || userName === appointment.doctorName;
  if (!canEdit) return null;

  const handleSaveReport = async () => {
    if (!date || !progressNote.trim()) return;

    const newReport = {
      appointmentId: appointment.appointmentId,
      date,
      progressNote,
    };
    await postResource("report", newReport);
  };

  useEffect(() => {
    if (!isLoading) {
      if (isSuccessful) {
        successAlert("Se guardó correctamente el reporte");
        setTimeout(() => {
          setIsOpen(false);
        }, 2500);
      } else if (isError) {
        errorAlert("Algo salió mal, inténtelo de nuevo");
      }
    }
  }, [isLoading, isError, isSuccessful]);

  return (
    <div>
      <div>
        <OneLineLabelInput
          id="date"
          name="Fecha"
          onChange={setDate}
          type="date"
        />
        <textarea
          rows={7}
          onChange={(e) => setProgressNote(e.target.value)}
          className="border border-tertiary rounded-lg w-full p-1 mt-2"
        />
      </div>
      <MainButtonForm
        buttonText="Guardar Reporte"
        onClick={handleSaveReport}
        disabled={
          isLoading ||
          !date ||
          !progressNote ||
          !doesDayMatchDate(day.value, date)
        }
      />
    </div>
  );
};
