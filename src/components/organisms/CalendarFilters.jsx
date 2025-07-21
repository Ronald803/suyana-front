import PropTypes from "prop-types";
import { useRef } from "react";
import MainButtonForm from "../atoms/MainButtonForm";
import OneLineLabelSelect from "../atoms/OneLineLabelSelect";
import { options } from "../../global";

function CalendarFilters(props) {
  const patientDropdownRef = useRef(null);
  const staffDropdownRef = useRef(null);
  const specialtyDropdownRef = useRef(null);
  const handleFilterClick = () => {
    let query = "";
    if (patientDropdownRef.current.value !== "") {
      query = query + `&&patient=${patientDropdownRef.current.value}`;
    }
    if (staffDropdownRef.current.value !== "") {
      query = query + `&&doctor=${staffDropdownRef.current.value}`;
    }
    if (specialtyDropdownRef.current.value !== "") {
      query = query + `&&specialty=${specialtyDropdownRef.current.value}`;
    }
    props.setQuery(query);
  };
  return (
    <div className="flex justify-center">
      <div className="m-1 p-3 border border-secondary rounded-lg">
        <OneLineLabelSelect
          id="specialty"
          name="Especialidad"
          options={options?.specialties}
          selectRef={specialtyDropdownRef}
        />
        <OneLineLabelSelect
          id="patient"
          name="Paciente"
          options={props.patients}
          selectRef={patientDropdownRef}
        />
        <OneLineLabelSelect
          id="staff"
          name="Terapeutas"
          options={props.doctors}
          selectRef={staffDropdownRef}
        />
        <div className="pt-2">
          <MainButtonForm buttonText="Filtrar" onClick={handleFilterClick} />
        </div>
      </div>
    </div>
  );
}

export default CalendarFilters;

CalendarFilters.propTypes = {
  setQuery: PropTypes.func,
  patients: PropTypes.array,
  doctors: PropTypes.array,
};
