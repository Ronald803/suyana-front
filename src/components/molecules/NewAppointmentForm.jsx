import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MainButtonForm from "../atoms/MainButtonForm";
import { options } from "../../global";
import OneLineLabelOnSelect from "../atoms/OneLineLabelOnSelect";
import OneLineLabelInputOnChange from "../atoms/OneLineLabelInputOnChange";
import usePostResourceHook from "../../api/usePostResourceHook";

function NewAppointmentForm({
  doctors,
  patients,
  appointments,
  cellSelected,
  specialties,
  setIsOpen,
  specialtySelected,
}) {
  const { postResource, isLoading, isError, isSuccessful } =
    usePostResourceHook();
  const [patientOptions, setPatientOptions] = useState([]);
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [specialty, setSpecialty] = useState(null);
  const { day, hour } = cellSelected;

  const [selected, setSelected] = useState({
    patient: null,
    doctor: null,
    specialty: null,
    day: null,
    startHour: null,
  });
  useEffect(() => {
    const specialtyFound = specialties.find((specialty) => {
      return specialty._id === specialtySelected;
    });
    setSpecialty(specialtyFound.name);
  }, [specialtySelected]);
  useEffect(() => {
    setDoctorOptions(doctors);
    setPatientOptions(
      patients.map((patient) => {
        return { name: patient.name, value: patient._id };
      })
    );
    setSelected((a) => ({
      ...a,
      day: day.key,
      startHour: hour,
      specialty: specialtySelected,
    }));
  }, [cellSelected]);

  useEffect(() => {
    const doctorsWithSpecialtySelected = [];
    doctors?.forEach((doctor) => {
      if (selected.specialty === doctor.specialty._id) {
        doctorsWithSpecialtySelected.push({
          name: doctor.name,
          value: doctor._id,
        });
      }
    });
    setDoctorOptions(doctorsWithSpecialtySelected);
  }, [selected.specialty]);
  useEffect(() => {
    if (!isLoading && isSuccessful) {
      setIsOpen(false);
    }
  }, [isLoading, isError, isSuccessful]);
  const handleCreateAppointment = () => {
    postResource("appointment", selected);
  };
  const onSelect = (e) => {
    setSelected((a) => ({ ...a, [e.target.id]: e.target.value }));
  };

  return (
    <div className="max-w-96 p-4 border rounded-lg">
      <div>
        <div className="flex pt-1">
          <p className="w-1/3">Día</p>
          <p className="w-2/3">{day.name} </p>
        </div>
        <div className="flex pt-1">
          <p className="w-1/3">Hora</p>
          <p className="w-2/3">{hour} </p>
        </div>
        <div className="flex pt-1">
          <p className="w-1/3">Especialidad</p>
          <p className="w-2/3">{specialty}</p>
        </div>
        <OneLineLabelOnSelect
          id="patient"
          name="Paciente"
          onSelect={onSelect}
          options={patientOptions}
        />
        <OneLineLabelOnSelect
          id="doctor"
          name="Terapeuta"
          onSelect={onSelect}
          options={doctorOptions}
        />
      </div>
      <MainButtonForm
        buttonText="Agendar Cita"
        onClick={handleCreateAppointment}
      />
    </div>
  );
}

export default NewAppointmentForm;

NewAppointmentForm.propTypes = {
  doctors: PropTypes.array,
  patients: PropTypes.array,
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      patient: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
    })
  ),
};
