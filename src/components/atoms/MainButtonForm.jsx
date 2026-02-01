import PropTypes from "prop-types";

function MainButtonForm({ onClick, buttonText, disabled = false }) {
  return (
    <div className="text-center py-1 w-full text-sm">
      <button
        disabled={disabled}
        className="
          py-2 px-8 w-full rounded-lg border text-white
          bg-primary border-white
          hover:bg-fourth hover:text-black
          disabled:bg-gray-400 disabled:border-gray-400
          disabled:text-gray-700 disabled:cursor-not-allowed
          disabled:hover:bg-gray-400
        "
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MainButtonForm;

MainButtonForm.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};
