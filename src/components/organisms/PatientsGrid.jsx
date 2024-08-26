import { useNavigate } from "react-router-dom";
import useGetResourceHook from "../../api/useGetResourceHook"
import MainOptionButton from "../atoms/MainOptionButton";

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
                <table className="">
                  <thead className="border border-primary">
                    <tr>
                      <th className="border-e border-primary">Nº</th>
                      <th>Pacientes</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      dataResource?.map((patient, index) => {
                        return (
                          <tr key={index} className="border border-primary" >
                            <td className="p-2 border-e border-primary">{index + 1}.</td>
                            <td className="p-2 border-e border-primary">{patient.name}</td>
                            <td className="p-2"><MainOptionButton buttonText="Info" onClick={handleChoosePatient} optionKey={index} /></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            }
          </div>
      }
    </div>
  )
}

export default PatientsGrid