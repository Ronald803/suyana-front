import PropTypes from 'prop-types';

function MainButtonForm(props) {
  return (
    <div className='text-center py-1 w-full text-sm'>
      <button
        className={'py-2 px-8 rounded-lg text-white hover:bg-fourth hover:text-black w-full border border-white bg-primary'}
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default MainButtonForm

MainButtonForm.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
}