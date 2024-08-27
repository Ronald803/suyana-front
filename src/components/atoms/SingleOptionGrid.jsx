import PropTypes from 'prop-types';
import MainOptionButton from './MainOptionButton'

function SingleOptionGrid(props) {
  return (
    <div className="flex py-1 border-b border-primary">
      <div className='pt-1 text-lg'>{props.icon}</div>
      <div className="w-full px-2">
        <div>{props.title}</div>
        <div className="text-xs">{props.tag}</div>
      </div>
      <div className="pt-1">
        <MainOptionButton buttonText="Info" onClick={props.handleClick} optionKey={props.index} />
      </div>
    </div>
  )
}

export default SingleOptionGrid

SingleOptionGrid.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  tag: PropTypes.string,
  handleClick: PropTypes.func,
  index: PropTypes.number
}