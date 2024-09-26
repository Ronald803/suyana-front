import PropTypes from "prop-types";
import useGetResourceHook from "../../api/useGetResourceHook";
import OneLineLabelSelect from "../atoms/OneLineLabelSelect";

function FilterDropdown(props) {
  const { dataResource, loading } = useGetResourceHook(props.resourceName, "");
  return (
    <div>
      <OneLineLabelSelect
        id={props.resourceName}
        name={props.name}
        options={
          loading
            ? []
            : dataResource?.map((data) => {
                return { value: data.name, name: data.name };
              })
        }
        selectRef={props.filterRef}
      />
    </div>
  );
}

export default FilterDropdown;

FilterDropdown.propTypes = {
  resourceName: PropTypes.string,
  name: PropTypes.string,
  filterRef: PropTypes.shape({ current: PropTypes.any }),
};
