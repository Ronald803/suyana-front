import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../global";

function useDeleteResourceHook() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [answer, setAnswer] = useState(null);
  const deleteResource = async (path, resourceId) => {
    const token = localStorage.getItem("t");
    setIsLoading(true);
    setIsError(false);
    setIsSuccessful(false);

    try {
      const response = await fetch(
        `${config.backendUrl}/api/${path}/${resourceId}`,
        {
          method: "DELETE",
          headers: {
            xtoken: token,
          },
        }
      );
      if (response.status === 401) {
        localStorage.removeItem("t");
        navigate("/");
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setIsSuccessful(true);
        setAnswer(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error posting resource:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteResource, isLoading, isError, isSuccessful, answer };
}

export default useDeleteResourceHook;
