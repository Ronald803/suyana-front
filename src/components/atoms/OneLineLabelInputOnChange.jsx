import PropTypes from "prop-types";

function OneLineLabelInputOnChange(props) {
  return (
    <div className="flex pt-1">
      <label className="w-1/3" htmlFor={props.id}>
        {props.name}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        className="w-2/3 rounded-lg border border-tertiary px-1"
        onChange={props.onChange}
      />
    </div>
  );
}

export default OneLineLabelInputOnChange;

OneLineLabelInputOnChange.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
