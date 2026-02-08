import PropTypes from "prop-types";

function OneLineLabelInput(props) {
  const handleOnChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex pt-1">
      <label className="w-1/3" htmlFor={props.id}>
        {props.name}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        ref={props.selectRef}
        onChange={handleOnChange}
        max={props.type === "date" ? today : undefined}
        className="w-2/3 rounded-lg border border-tertiary px-1"
      />
    </div>
  );
}

export default OneLineLabelInput;

OneLineLabelInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  selectRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
