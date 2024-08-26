import PropTypes from 'prop-types';
import PersonSingleDetail from '../atoms/PersonSingleDetail';
import MainOptionButton from '../atoms/MainOptionButton';

function EmployeeDetails(props) {
  return (
    <div className='p-1'>
      <div className='border-b border-primary'>
        <div className='pt-2 pb-1 text-center text-primary font-bold'>Información Básica de Contacto</div>
        <PersonSingleDetail icon='👤' detailTitle='Nombre' detailInfo={props.employee?.name} />
        <PersonSingleDetail icon='📞' detailTitle='Celular' detailInfo={props.employee?.phone} />
        <PersonSingleDetail icon='🏠' detailTitle='Dirección' detailInfo={props.employee?.address} />
        <PersonSingleDetail icon='📨' detailTitle='Correo Electrónico' detailInfo={props.employee?.email} />
      </div>
      <div className='border-b border-primary'>
        <div className='pt-2 pb-1 text-center text-primary font-bold'>Información Laboral</div>
        <PersonSingleDetail icon='🩺' detailTitle='Especialidad' detailInfo={props.employee?.specialty} />
        <PersonSingleDetail icon='🏥' detailTitle='Sucursal' detailInfo={props.employee?.branch[0]} />
        <PersonSingleDetail icon='⏰' detailTitle='Disponibilidad' detailInfo={props.employee?.availability} />
      </div>
      <div className='border-b border-primary'>
        <div className='pt-2 pb-1 text-center text-primary font-bold'>Pacientes</div>
        {
          props.employee?.patients.map((patient, index) => {
            return (
              <div className='flex p-1 border-b border-primary' key={index}>
                <div><MainOptionButton buttonText='Mas info' onClick={console.log} optionKey={patient.sessions} /></div>
                <div className='py-1 px-2'>{patient.name}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default EmployeeDetails

EmployeeDetails.propTypes = {
  employee: PropTypes.object
}