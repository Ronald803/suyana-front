import { useRef } from 'react'
import OneLineLabelInput from '../atoms/OneLineLabelInput'
import MainButtonForm from '../atoms/MainButtonForm'
import OneLineLabelSelect from '../atoms/OneLineLabelSelect'
import { options } from '../../global'
import { createEmployeeBackend } from '../../api/employeeRequests'
import successAlert from '../alerts/successAlert'
import errorAlert from '../alerts/errorAlert'

function CreateEmployeeForm() {
	const addressRef = useRef(null)
	const availabilityRef = useRef(null)
	const branchRef = useRef(null)
	const emailRef = useRef(null)
	const nameRef = useRef(null)
	const passwordRef = useRef(null)
	const phoneRef = useRef(null)
	const specialtyRef = useRef(null)
	const handleCreateEmployee = async () => {
		const newEmployee = {
			address: addressRef.current.value,
			availability: availabilityRef.current.value,
			branch: branchRef.current.value,
			email: emailRef.current.value,
			name: nameRef.current.value,
			password: passwordRef.current.value,
			phone: phoneRef.current.value,
			specialty: specialtyRef.current.value,
		}
		const answer = await createEmployeeBackend(newEmployee)
		if (answer) {
			successAlert(answer.notice)
		} else {
			errorAlert('Algo salió mal, vuelve a intentarlo')
		}
	}
	return (
		<div>
			<div>
				<div>
					<OneLineLabelInput id='name' name='Nombre' selectRef={nameRef} type='string' />
					<OneLineLabelSelect id='specialty' name='Especialidad' selectRef={specialtyRef} options={options.specialties} />
					<OneLineLabelSelect id='branch' name='Sucursal' selectRef={branchRef} options={options.branch} />
					<OneLineLabelSelect id='availability' name='Disponibilidad' selectRef={availabilityRef} options={options.availability} />
					<OneLineLabelInput id='phone' name='Celular' selectRef={phoneRef} type='number' />
					<OneLineLabelInput id='address' name='Domicilio' selectRef={addressRef} type='text' />
					<OneLineLabelInput id='email' name='Email' selectRef={emailRef} type='text' />
					<OneLineLabelInput id='password' name='Contraseña' selectRef={passwordRef} type='password' />
				</div>
				<MainButtonForm buttonText='Registrar Usuario' onClick={handleCreateEmployee} />
			</div>
		</div>
	)
}

export default CreateEmployeeForm
