import { useParams } from 'react-router-dom'
import useGetResourceHook from '../../api/useGetResourceHook'
import PatientDetails from '../organisms/PatientDetails';

function PatientDetailPage() {
  const { patiendId } = useParams()
  const { dataResource, loading, error } = useGetResourceHook('patient', `_id=${patiendId}`);
  return (
    <div>
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
                <PatientDetails patient={dataResource[0]} />
            }
          </div>
      }
    </div>
  )
}

export default PatientDetailPage