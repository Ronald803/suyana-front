import { useState } from 'react'
import CreateEmployeeForm from '../molecules/CreateEmployeeForm'
import MainOptionButton from '../atoms/MainOptionButton'

function AddNewEmployeeOption() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='flex'>
        <div className='pt-1 text-lg'>📝</div>
        <div className='w-full px-2'>
          <div>Agregar nuevo terapeuta?</div>
          <div className='text-xs'>--------</div>
        </div>
        <div className='pt-1'>
          <MainOptionButton buttonText='Nuevo' onClick={handleClick} optionKey={1} />
        </div>

      </div>
      {
        isOpen
        &&
        <CreateEmployeeForm />
      }
    </div>
  )
}

export default AddNewEmployeeOption