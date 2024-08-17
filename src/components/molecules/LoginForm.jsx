import { useRef } from 'react'
import TwoLineLabelInput from '../atoms/TwoLineLabelInput'
import MainButtonForm from '../atoms/MainButtonForm'
import { loginBackend } from '../../api/employeeRequests'
import successAlert from '../alerts/successAlert'
import errorAlert from '../alerts/errorAlert'

function LoginForm() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const login = async () => {
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    const answer = await loginBackend(credentials)
    if(answer){
      successAlert(`Bienvenid@ ${answer.name}`)
    } else {
      errorAlert('Algo salió mal, vuelve a intentarlo')
    }
  }
  return (
    <div className='w-80 p-2 border'>
      <div className=''>
        <TwoLineLabelInput selectRef={emailRef} type='email' id='email' name='Correo Electrónico' />
        <TwoLineLabelInput selectRef={passwordRef} type='password' id='password' name='Contraseña' />
        <MainButtonForm buttonText='Iniciar Sesión' onClick={login} />
      </div>
    </div>
  )
}

export default LoginForm
