import PropTypes from "prop-types";
import PersonSingleDetail from "../../atoms/PersonSingleDetail";
import MainOptionButton from "../../atoms/MainOptionButton";
import { useState } from "react";
import { PatientsEmployee } from "./PatientsEmployee";

function EmployeeDetails({ employee }) {
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
            detailInfo={employee?.name}
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
              detailInfo={employee?.phone}
            />
            <PersonSingleDetail
              icon="🏠"
              detailTitle="Dirección"
              detailInfo={employee?.address}
            />
            <PersonSingleDetail
              icon="📨"
              detailTitle="Correo Electrónico"
              detailInfo={employee?.email}
            />
          </div>
          <div className="border-b border-primary">
            <div className="pt-1 pb-1 pl-2 text-primary font-bold">
              Información Laboral
            </div>
            <PersonSingleDetail
              icon="🩺"
              detailTitle="Especialidad"
              detailInfo={employee?.specialty.name}
            />
          </div>
          <PatientsEmployee employee={employee} />
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;

EmployeeDetails.propTypes = {
  employee: PropTypes.object,
};
