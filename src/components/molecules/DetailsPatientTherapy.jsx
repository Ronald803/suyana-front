import PropTypes from 'prop-types';

function DetailsPatientTherapy(props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default DetailsPatientTherapy

DetailsPatientTherapy.propTypes = {
  name: PropTypes.string
}