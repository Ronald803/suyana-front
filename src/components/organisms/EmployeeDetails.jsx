import PropTypes from "prop-types";
import PersonSingleDetail from "../atoms/PersonSingleDetail";
import MainOptionButton from "../atoms/MainOptionButton";
import { useState } from "react";

function EmployeeDetails(props) {
  const [isDoctorDetailsOpen, setIsDoctorDetailsOpen] = useState(false);
  const handleToggleDetails = () => {
    setIsDoctorDetailsOpen(!isDoctorDetailsOpen);
  };
  return (
    <div className="p-1 border border-primary rounded-md m-1">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <PersonSingleDetail
            icon="👤"
            detailTitle="Nombre"
            detailInfo={props.employee?.name}
          />
        </div>
        <div className="basis-1/4">
          <MainOptionButton
            buttonText={isDoctorDetailsOpen ? "🔺" : "🔻"}
            onClick={handleToggleDetails}
            optionKey={1}
          />
        </div>
      </div>
      {isDoctorDetailsOpen && (
        <div>
          <div className="border-b border-primary">
            <div className="pt-1 pb-1 pl-2 text-primary font-bold">
              Información de Contacto
            </div>

            <PersonSingleDetail
              icon="📞"
              detailTitle="Celular"
              detailInfo={props.employee?.phone}
            />
            <PersonSingleDetail
              icon="🏠"
              detailTitle="Dirección"
              detailInfo={props.employee?.address}
            />
            <PersonSingleDetail
              icon="📨"
              detailTitle="Correo Electrónico"
              detailInfo={props.employee?.email}
            />
          </div>
          <div className="border-b border-primary">
            <div className="pt-1 pb-1 pl-2 text-primary font-bold">
              Información Laboral
            </div>
            <PersonSingleDetail
              icon="🩺"
              detailTitle="Especialidad"
              detailInfo={props.employee?.specialty.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;

EmployeeDetails.propTypes = {
  employee: PropTypes.object,
};
