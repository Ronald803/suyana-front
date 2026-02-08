import useGetResourceHook from "../../api/useGetResourceHook";
import EmployeeDetails from "./employee/EmployeeDetails";

function EmployeesGrid() {
  const { dataResource, loading, error } = useGetResourceHook("staff", "");
  return (
    <div className="py-1">
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {error ? (
            <div>Ocurrió un error</div>
          ) : (
            <div>
              {dataResource?.map((employee, index) => {
                return <EmployeeDetails employee={employee} key={index} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeesGrid;
