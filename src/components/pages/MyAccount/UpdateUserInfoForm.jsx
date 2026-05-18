import { useState } from "react";
import TwoLineInputForm from "../../atoms/TwoLineInputForm";
import MainButtonForm from "../../atoms/MainButtonForm";
import { updateUserData } from "../../../api/employeeRequests";
import errorAlert from "../../alerts/errorAlert";
import successAlert from "../../alerts/successAlert";

function UpdateUserInfoForm({ userName, email, address, phone, setIsEditing }) {
  const [newUserName, setNewUserName] = useState(userName);
  const [newEmail, setNewEmail] = useState(email);
  const [newAddress, setNewAddress] = useState(address);
  const [newPhone, setNewPhone] = useState(phone);
  const [newPassword, setNewPassword] = useState("");

  const handleUpdate = async () => {
    const newData = {
      name: newUserName,
      email: newEmail,
      address: newAddress,
      phone: newPhone,
      password: newPassword,
    };
    const answer = await updateUserData(newData);
    if (answer) {
      successAlert("Información Actualizada");
      setIsEditing(false);
    } else {
      errorAlert("Algo salió mal, vuelve a intentarlo");
    }
  };
  const isButtonEnable =
    !!newUserName && !!newEmail && !!newAddress && !!newPhone && !!newPassword;
  return (
    <div className="p-2">
      <TwoLineInputForm
        id="name"
        name="Nombre"
        type="text"
        value={newUserName}
        onChange={setNewUserName}
      />

      <TwoLineInputForm
        id="email"
        name="Correo"
        type="email"
        value={newEmail}
        onChange={setNewEmail}
      />

      <TwoLineInputForm
        id="address"
        name="Dirección"
        type="text"
        value={newAddress}
        onChange={setNewAddress}
      />

      <TwoLineInputForm
        id="phone"
        name="Teléfono"
        type="tel"
        value={newPhone}
        onChange={setNewPhone}
      />

      <TwoLineInputForm
        id="password"
        name="Nueva contraseña"
        type="password"
        value={newPassword}
        onChange={setNewPassword}
      />

      <MainButtonForm
        onClick={handleUpdate}
        buttonText={"Actualizar mis datos"}
        disabled={!isButtonEnable}
      />
    </div>
  );
}

export default UpdateUserInfoForm;
