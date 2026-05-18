import MainButtonForm from "../../atoms/MainButtonForm";
import PersonSingleDetail from "../../atoms/PersonSingleDetail";

function UserInfoCard({ userName, email, address, phone, setIsEditing }) {
  return (
    <div className="p-1 border border-primary rounded-md m-1">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <PersonSingleDetail
            icon="👤"
            detailTitle="Nombre"
            detailInfo={userName}
          />
        </div>
      </div>

      <div>
        <div className="border-primary">
          <div className="pt-1 pb-1 pl-2 text-primary font-bold">
            Información de Contacto
          </div>

          <PersonSingleDetail
            icon="📞"
            detailTitle="Celular"
            detailInfo={phone}
          />
          <PersonSingleDetail
            icon="🏠"
            detailTitle="Dirección"
            detailInfo={address}
          />
          <PersonSingleDetail
            icon="📨"
            detailTitle="Correo Electrónico"
            detailInfo={email}
          />
        </div>
      </div>
      <MainButtonForm
        buttonText={"Actualizar mi información"}
        onClick={() => setIsEditing(true)}
      />
    </div>
  );
}

export default UserInfoCard;
