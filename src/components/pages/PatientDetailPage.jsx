import { useParams } from "react-router-dom";
import useGetResourceHook from "../../api/useGetResourceHook";
import PatientDetails from "../organisms/patient/PatientDetails";

function PatientDetailPage() {
  const { patiendId } = useParams();
  const { dataResource, loading, error } = useGetResourceHook(
    "patient",
    `_id=${patiendId}`
  );
  return (
    <div className="w-full bg-yellow-300">
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="w-full">
          {error ? (
            <div>Ocurrió un error</div>
          ) : (
            <PatientDetails patient={dataResource[0]} />
          )}
        </div>
      )}
    </div>
  );
}

export default PatientDetailPage;
