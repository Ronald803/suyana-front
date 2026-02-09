import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorPhotoGrid } from "../molecules/DoctorPhotoGrid";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("t");
    if (token?.length > 0) {
      navigate("/calendar");
    }
  }, []);
  return (
    <>
      <div className="font-Montserrat bg-fifth">
        <header className="py-2 text-center text-white">
          <h1 className="text-4xl font-bold mb-1">
            Clínica Neuro Atención Especializada
          </h1>
        </header>
        <DoctorPhotoGrid />
      </div>
    </>
  );
}

export default HomePage;
