import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../global";

function usePostResourceHook() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [answer, setAnswer] = useState(null);

  const postResource = async (path, body) => {
    const token = localStorage.getItem("t");
    setIsLoading(true);
    setIsError(false);
    setIsSuccessful(false);

    try {
      const response = await fetch(`${config.backendUrl}/api/${path}`, {
        method: "POST",
        headers: {
          xtoken: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

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

  return { postResource, isLoading, isError, isSuccessful, answer };
}

export default usePostResourceHook;
