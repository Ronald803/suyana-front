import { useNavigate } from "react-router-dom";
import useGetResourceHook from "../../api/useGetResourceHook"
import SingleOptionGrid from "../atoms/SingleOptionGrid";

function PatientsGrid() {
  const navigate = useNavigate()
  const { dataResource, loading, error } = useGetResourceHook('patient', '');
  const handleChoosePatient = (index) => {
    navigate(`/patients/${dataResource[index]._id}`)
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
                    dataResource?.map((patient, index) => {
                      return (
                        <SingleOptionGrid icon='😷' title={patient.name} tag={patient.age + ' años'} handleClick={handleChoosePatient} index={index} key={index} />
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

export default PatientsGrid