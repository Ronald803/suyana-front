import EmployeesGrid from "../organisms/EmployeesGrid";
import AddNewEmployeeOption from "../organisms/AddNewEmployeeOption";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { useAuth } from "../../hooks/useAuth";

function EmployeesPage() {
  useRequireAuth();
  const { isAdmin } = useAuth();
  return (
    <div className="flex justify-center">
      <div>
        <EmployeesGrid />
        {/* {isAdmin && <AddNewEmployeeOption />} */}
      </div>
    </div>
  );
}

export default EmployeesPage;
