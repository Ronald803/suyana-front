import { useRef } from "react";
import OneLineLabelInput from "../atoms/OneLineLabelInput";
import MainButtonForm from "../atoms/MainButtonForm";
import OneLineLabelSelect from "../atoms/OneLineLabelSelect";
import { createEmployeeBackend } from "../../api/employeeRequests";
import successAlert from "../alerts/successAlert";
import errorAlert from "../alerts/errorAlert";
import { useGetSpecialties } from "../../hooks/useGetSpecialties";
import { messages } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

function CreateEmployeeForm() {
  const navigate = useNavigate();
  const specialties = useGetSpecialties();
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const specialtyRef = useRef(null);
  const birthdayRef = useRef(null);

  const handleCreateEmployee = async () => {
    const newEmployee = {
      address: addressRef.current.value,
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      specialty: specialtyRef.current.value,
      birthday: birthdayRef.current.value,
    };
    const answer = await createEmployeeBackend(newEmployee);
    if (answer) {
      successAlert(messages.userSuccessfullyCreated, 5000);
      setTimeout(() => {
        navigate("/");
      }, 3000);
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
          <OneLineLabelSelect
            id="specialty"
            name="Especialidad"
            selectRef={specialtyRef}
            options={specialties}
          />
          <OneLineLabelInput
            id="phone"
            name="Celular"
            selectRef={phoneRef}
            type="number"
          />
          <OneLineLabelInput
            id="address"
            name="Domicilio"
            selectRef={addressRef}
            type="text"
          />
          <OneLineLabelInput
            id="email"
            name="Email"
            selectRef={emailRef}
            type="text"
          />
          <OneLineLabelInput
            id="birthday"
            name="F. Nacimiento"
            selectRef={birthdayRef}
            type="date"
          />
          <OneLineLabelInput
            id="password"
            name="Contraseña"
            selectRef={passwordRef}
            type="password"
          />
        </div>
        <div className="pt-4">
          <MainButtonForm
            buttonText="Registrar Usuario"
            onClick={handleCreateEmployee}
          />
          <MainButtonForm
            buttonText="Iniciar Sesión"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeForm;
