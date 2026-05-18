import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useRequireAuth } from "../../../hooks/useRequireAuth";
import MainButtonForm from "../../atoms/MainButtonForm";
import UserInfoCard from "./UserInfoCard";
import UpdateUserInfoForm from "./UpdateUserInfoForm";

function MyAccount() {
  useRequireAuth();
  const { userName, email, address, phone } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      {!isEditing ? (
        <UserInfoCard
          userName={userName}
          email={email}
          address={address}
          phone={phone}
          setIsEditing={setIsEditing}
        />
      ) : (
        <UpdateUserInfoForm
          userName={userName}
          email={email}
          address={address}
          phone={phone}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default MyAccount;
