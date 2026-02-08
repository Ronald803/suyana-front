import useGetResourceHook from "../../api/useGetResourceHook";
import PatientDetails from "./patient/PatientDetails";

function PatientsGrid() {
  const { dataResource, loading, error } = useGetResourceHook("patient", "");
  return (
    <div className="py-1">
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {error ? (
            <div>Ocurrió un error</div>
          ) : (
            <div className="px-1">
              {dataResource?.map((patient, index) => {
                return <PatientDetails patient={patient} key={index} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PatientsGrid;
