import { useNavigate } from "react-router-dom"
import useGetResourceHook from "../../api/useGetResourceHook"
import SingleOptionGrid from "../atoms/SingleOptionGrid";

function EmployeesGrid() {
  const navigate = useNavigate()
  const { dataResource, loading, error } = useGetResourceHook('staff', '');
  const handleChooseEmployee = (index) => {
    const stringEmployee = JSON.stringify(dataResource[index]);
    localStorage.setItem('employee', stringEmployee)
    navigate(`/employees/${dataResource[index]._id}`)
  }
  return (
    <div className="py-1">
      {
        loading
          ?
          <div>Cargando...</div>
          :
          <div>
            {
              error
                ?
                <div>Ocurrió un error</div>
                :
                <div className="">
                  {
                    dataResource?.map((employee, index) => {
                      return (
                        <SingleOptionGrid icon='🩺' title={employee.name} tag={employee.specialty} handleClick={handleChooseEmployee} index={index} key={index} />
                      )
                    })
                  }
                </div>
            }
          </div>
      }
    </div>
  )
}

export default EmployeesGrid