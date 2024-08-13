import PropTypes from 'prop-types';

function TwoLineLabelInput(props) {
  return (
    <div className='pt-2 text-sm'>
        <div><label className='ps-2' htmlFor={props.id}>{props.name}</label></div>
        <input
            type={props.type}
            id={props.id}
            name={props.id}
            ref={props.selectRef}
            className='my-1 p-1 px-2 w-full rounded-lg border border-tertiary'
        />
    </div>
  )
}

export default TwoLineLabelInput

TwoLineLabelInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  selectRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
])
}