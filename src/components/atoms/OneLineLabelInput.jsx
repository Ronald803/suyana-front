import PropTypes from 'prop-types';

function OneLineLabelInput(props) {
  return (
    <div className='flex pt-1'>
      <label className='w-1/3' htmlFor={props.id}>{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        ref={props.selectRef}
        className='w-2/3 rounded-lg border border-tertiary px-1'
      />
    </div>
  )
}

export default OneLineLabelInput

OneLineLabelInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  selectRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
])
}