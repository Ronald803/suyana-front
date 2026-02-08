import { PatientSingleTreatment } from "./PatientSingleTreatment";

export const PatientTreatments = ({ patient }) => {
  const { treatments } = patient;
  return (
    <div>
      <div className="pt-1 pb-1 pl-2 text-primary font-bold">Tratamiento</div>
      {treatments?.map((treatment) => {
        return <PatientSingleTreatment treatment={treatment} />;
      })}
    </div>
  );
};
