import NewPatientForm from '../molecules/NewPatientForm'
import MainOptionButton from '../atoms/MainOptionButton'
import { useState } from 'react'

function AddNewPatientOption() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='flex'>
        <div className='pt-1 text-lg'>📝</div>
        <div className='w-full px-2'>
          <div>Agregar nuevo paciente?</div>
          <div className='text-xs'>--------</div>
        </div>
        <div className='pt-1'>
          <MainOptionButton buttonText='Nuevo' onClick={handleClick} optionKey={1} />
        </div>

      </div>
      {
        isOpen
        &&
        <NewPatientForm />
      }
    </div>
  )
}

export default AddNewPatientOption