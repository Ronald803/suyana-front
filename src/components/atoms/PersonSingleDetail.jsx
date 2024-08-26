import PropTypes from 'prop-types';

function PersonSingleDetail(props) {
  return (
    <div className='flex'>
      <div className='pt-1 text-lg'>{props.icon}</div>
      <div className='w-full px-2 '>
        <div>{props.detailInfo}</div>
        <div className='text-xs'>{props.detailTitle}</div>
        <hr />
      </div>
    </div>
  )
}

export default PersonSingleDetail

PersonSingleDetail.propTypes = {
  icon: PropTypes.string,
  detailTitle: PropTypes.string,
  detailInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}