import { useRef } from "react"
import MainButtonForm from "../atoms/MainButtonForm"
import OneLineLabelInput from "../atoms/OneLineLabelInput"
import OneLineLabelSelect from "../atoms/OneLineLabelSelect"
import { options } from "../../config"
import { createPatientBackend } from "../../api/patientRequests"
import successAlert from "../alerts/successAlert"
import errorAlert from "../alerts/errorAlert"

function NewPatientForm() {
  const ageRef = useRef(null)
  const birthdayRef = useRef(null)
  const branchRef = useRef(null)
  const diagnosisRef = useRef(null)
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const handleCreatePatient = async () => {
    const newPatient = {
      age: ageRef.current.value,
      birthday: birthdayRef.current.value,
      branch: branchRef.current.value,
      diagnosis: diagnosisRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    }
    const answer = await createPatientBackend(newPatient)
    if (answer) {
      successAlert(answer.message)
    } else {
      errorAlert('Algo salió mal, vuelve a intentarlo')
    }
  }
  return (
    <div>
      <div>
        <div>
          <OneLineLabelInput id='name' name='Nombre' selectRef={nameRef} type='string' />
          <OneLineLabelInput id='age' name='Edad' selectRef={ageRef} type='number' />
          <OneLineLabelInput id='birthday' name='F. Nacimiento' selectRef={birthdayRef} type='date' />
          <OneLineLabelSelect id='branch' name='Sucursal' selectRef={branchRef} options={options.branch} />
          <OneLineLabelInput id='diagnosis' name='Diagnóstico' selectRef={diagnosisRef} type='string' />
          <OneLineLabelInput id='phone' name='Celular' selectRef={phoneRef} type='number' />
        </div>
        <MainButtonForm buttonText='Registrar paciente' onClick={handleCreatePatient} />
      </div>
    </div>
  )
}

export default NewPatientForm
