import PropTypes from 'prop-types';

function SingleOptionBar(props) {
  const notChoosenTagStyle = "flex w-1/3 text-center text-gray-800 py-1 border-r-2 border-secondary"
  const choosenTagStyle = " flex w-1/3 text-center text-white bg-primary py-1 border-r-2 border-secondary"
  return (
    <div className={props.currentPath == props.optionPath ? choosenTagStyle : notChoosenTagStyle} >
      <a className='w-full' href={props.optionPath}>
        {props.optionName}
      </a>
    </div>
  )
}

export default SingleOptionBar

SingleOptionBar.propTypes = {
  currentPath: PropTypes.string,
  optionPath: PropTypes.string,
  optionName: PropTypes.string
}