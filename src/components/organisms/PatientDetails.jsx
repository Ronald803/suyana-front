import PropTypes from 'prop-types';
import PersonSingleDetail from '../atoms/PersonSingleDetail';
import DetailsPatientTherapy from '../molecules/DetailsPatientTherapy';

function PatientDetails(props) {
  return (
    <div className='p-1'>
      <div className='border-b border-primary'>
        <div className='text-center text-primary font-bold'>Información Básica</div>
        <PersonSingleDetail icon='👤' detailTitle='Nombre' detailInfo={props.patient.name} />
        <PersonSingleDetail icon='📞' detailTitle='Celular' detailInfo={props.patient.phone} />
        <PersonSingleDetail icon='🎂' detailTitle='Edad' detailInfo={props.patient.age} />
      </div>
      <div className='border-b border-primary'>
        <div className='text-center text-primary font-bold'>Información Médica</div>
        <PersonSingleDetail icon='🗒️' detailTitle='Diagnóstico General' detailInfo={props.patient.diagnosis} />
        <PersonSingleDetail icon='🩸' detailTitle='Tipo de Sangre' detailInfo='OH+' />
        <PersonSingleDetail icon='❤️‍🩹' detailTitle='Otra Información' detailInfo='Ninguna' />
      </div>
      <div className='border-b border-primary'>
        <div className='text-center text-primary font-bold'>Información Terapeútica</div>
        {
          props.patient.specialty.map((specialty, index) => {
            return (
              <DetailsPatientTherapy name={specialty} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PatientDetails

PatientDetails.propTypes = {
  patient: PropTypes.object
}