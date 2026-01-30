import PropTypes from "prop-types";
import PersonSingleDetail from "../atoms/PersonSingleDetail";
import { useState } from "react";
import MainOptionButton from "../atoms/MainOptionButton";

function PatientDetails(props) {
  const [isPatientDetailsOpen, setIsPatientDetailsOpen] = useState(false);
  const handleToggleDetails = () => {
    setIsPatientDetailsOpen(!isPatientDetailsOpen);
  };
  return (
    <div className="p-1 border border-primary rounded-md m-1">
      <div className="flex flex-row ">
        <div className="basis-3/4">
          <PersonSingleDetail
            icon="👤"
            detailTitle="Nombre"
            detailInfo={props.patient.name}
          />
        </div>
        <div className="basis-1/4">
          <MainOptionButton
            buttonText={isPatientDetailsOpen ? "🔺" : "🔻"}
            onClick={handleToggleDetails}
            optionKey={1}
          />
        </div>
      </div>
      {isPatientDetailsOpen && (
        <div>
          <div className="border-b border-primary">
            <div className="pt-1 pb-1 pl-2 text-primary font-bold">
              Información de Contacto
            </div>
            <PersonSingleDetail
              icon="📞"
              detailTitle="Celular"
              detailInfo={props.patient.phone}
            />
            <PersonSingleDetail
              icon="🎂"
              detailTitle="Nacimiento"
              detailInfo={props.patient.birthday}
            />
          </div>
          <div className="border-b border-primary">
            <div className="pt-1 pb-1 pl-2 text-primary font-bold">
              Información Terapéutica
            </div>
            <PersonSingleDetail
              icon="🗒️"
              detailTitle="Diagnóstico General"
              detailInfo={props.patient.diagnosis}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientDetails;

PatientDetails.propTypes = {
  patient: PropTypes.object,
};
