import { useState } from "react";

export const PatientSingleTreatment = ({ treatment }) => {
  const { specialty, doctor, reports } = treatment;
  const [isSingleTreatmentOpen, setIsSingleTreatmentOpen] = useState(false);
  const handleOnClick = () => {
    setIsSingleTreatmentOpen(!isSingleTreatmentOpen);
  };
  return (
    <div className="ml-2 py-0.5 border-b border-secondary">
      <div className="flex flex-row">
        <div className="basis-1/12" onClick={handleOnClick}>
          {isSingleTreatmentOpen ? "🔺" : "🔻"}{" "}
        </div>
        <div className="basis-11/12">{`${specialty} (${doctor})`}</div>
      </div>
      {isSingleTreatmentOpen && (
        <div>
          {reports?.map((report) => {
            const { date, progressNote } = report;
            if (!date && !progressNote) return null;
            return (
              <div className="border-b">{`▪️(${date}) ${progressNote}`}</div>
            );
          })}
        </div>
      )}
    </div>
  );
};
