import { useEffect, useState } from "react"
import { config } from "../global"
import { useNavigate } from "react-router-dom"

function useGetResourceHook(resourceName, queryFilter) {
  const navigate = useNavigate()
  const token = localStorage.getItem('t')
  const [dataResource, setDataResource] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await fetch(`${config.backendUrl}/api/${resourceName}?${queryFilter}`, {
          method: 'GET',
          headers: [["xtoken", token]]
        })
        if (response.status == 401) {
          localStorage.setItem('t', '')
          navigate('/')
        }
        if (response.ok) {
          const data = await response.json()
          setDataResource(data.body)
          setLoading(false)
        } else {
          setError(true)
          setLoading(false)
        }
      } catch (err) {
        console.log(err);
        setError(true)
        setLoading(false)
      }
    };
    fetchResource();
  }, [])
  return { dataResource, loading, error }
}

export default useGetResourceHook