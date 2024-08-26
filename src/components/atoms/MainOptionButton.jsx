import PropTypes from 'prop-types';

function MainOptionButton(props) {
  const handleClick = () => {
    props.onClick(props.optionKey)
  }
  return (
    <div className='text-center w-full text-sm'>
      <button
        className={'px-5 py-1 rounded-lg text-white hover:bg-fourth hover:text-black w-full border border-white bg-primary'}
        onClick={handleClick}
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default MainOptionButton

MainOptionButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  optionKey: PropTypes.number
}