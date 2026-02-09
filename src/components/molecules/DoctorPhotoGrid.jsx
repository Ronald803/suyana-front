import { useState } from "react";
import useGetResourceHook from "../../api/useGetResourceHook";
import Popover from "./Popover";
import { loginBackend } from "../../api/employeeRequests";
import { useNavigate } from "react-router-dom";
import MainButtonForm from "../atoms/MainButtonForm";
import successAlert from "../alerts/successAlert";
import errorAlert from "../alerts/errorAlert";

export const DoctorPhotoGrid = () => {
  const {
    dataResource: doctors,
    loading,
    error,
  } = useGetResourceHook("staff/login", "");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center">Cargando perfiles...</p>;
  }
  const handleLogin = async () => {
    const email = selectedDoctor?.email;
    const answer = await loginBackend({ email, password });
    if (answer) {
      successAlert(`Bienvenid@ ${answer.name}`);
      setTimeout(() => {
        navigate("/calendar");
      }, 2500);
    } else {
      errorAlert("Algo salió mal, vuelve a intentarlo");
    }
  };
  return (
    <>
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {doctors?.map((doctor) => (
          <button
            key={doctor?.email}
            onClick={() => setSelectedDoctor(doctor)}
            className="rounded-full hover:scale-105 transition transform shadow-lg"
          >
            <img
              src={doctor?.photoUrl}
              alt={doctor?.email}
              className="w-full h-40 object-cover rounded-full"
            />
          </button>
        ))}
      </div>
      <Popover isOpen={!!selectedDoctor} setIsOpen={setSelectedDoctor}>
        <div className="flex flex-col items-center">
          <img
            src={selectedDoctor?.photoUrl}
            className="w-52 h-52 rounded-full object-cover my-4"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-secondary mb-1"
          />
          <MainButtonForm
            buttonText="Entrar"
            onClick={handleLogin}
            disabled={!password}
          />
        </div>
      </Popover>
    </>
  );
};
