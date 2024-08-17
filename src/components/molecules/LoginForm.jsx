import { useRef } from 'react'
import TwoLineLabelInput from '../atoms/TwoLineLabelInput'
import MainButtonForm from '../atoms/MainButtonForm'
import { loginBackend } from '../../api/employeeRequests'
import successAlert from '../alerts/successAlert'
import errorAlert from '../alerts/errorAlert'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()
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
      setTimeout(()=>{
        navigate('/calendar')
      },2500)
    } else {
      errorAlert('Algo salió mal, vuelve a intentarlo')
    }
  }
  const goToNewUserPage = () => {
    navigate('/new-user')
  }
  return (
    <div className='max-w-96 p-4 border rounded-lg'>
      <div className=''>
        <TwoLineLabelInput selectRef={emailRef} type='email' id='email' name='Correo Electrónico' />
        <TwoLineLabelInput selectRef={passwordRef} type='password' id='password' name='Contraseña' />
      </div>
      <div className='pt-4'>
        <MainButtonForm buttonText='Iniciar Sesión' onClick={login} />
        <MainButtonForm buttonText='Crear Cuenta' onClick={goToNewUserPage} />
      </div>
    </div>
  )
}

export default LoginForm
