import { useRef } from "react";
import MainButtonForm from "../atoms/MainButtonForm";
import OneLineLabelInput from "../atoms/OneLineLabelInput";
import { createPatientBackend } from "../../api/patientRequests";
import successAlert from "../alerts/successAlert";
import errorAlert from "../alerts/errorAlert";

function NewPatientForm() {
  const nameRef = useRef(null);
  const birthdayRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const tutorNameRef = useRef(null);
  const diagnosisRef = useRef(null);
  const handleCreatePatient = async () => {
    const newPatient = {
      name: nameRef.current.value,
      birthday: birthdayRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      tutorName: tutorNameRef.current.value,
      diagnosis: diagnosisRef.current.value,
    };
    const answer = await createPatientBackend(newPatient);
    if (answer) {
      successAlert(answer.message);
    } else {
      errorAlert("Algo salió mal, vuelve a intentarlo");
    }
  };
  return (
    <div className="max-w-96 p-4 border rounded-lg">
      <div>
        <div>
          <OneLineLabelInput
            id="name"
            name="Nombre"
            selectRef={nameRef}
            type="string"
          />
          <OneLineLabelInput
            id="birthday"
            name="F. Nacimiento"
            selectRef={birthdayRef}
            type="date"
          />
          <OneLineLabelInput
            id="phone"
            name="Celular"
            selectRef={phoneRef}
            type="number"
          />
          <OneLineLabelInput
            id="address"
            name="Dirección"
            selectRef={addressRef}
            type="string"
          />
          <OneLineLabelInput
            id="tutorName"
            name="Tutor"
            selectRef={tutorNameRef}
            type="string"
          />
          <OneLineLabelInput
            id="diagnosis"
            name="Diagnóstico"
            selectRef={diagnosisRef}
            type="string"
          />
        </div>
        <MainButtonForm
          buttonText="Registrar paciente"
          onClick={handleCreatePatient}
        />
      </div>
    </div>
  );
}

export default NewPatientForm;
