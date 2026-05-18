export const useAuth = () => {
  const rol = localStorage.getItem("rol");
  const userName = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const address = localStorage.getItem("address");
  const phone = localStorage.getItem("phone");
  const token = localStorage.getItem("t");
  return {
    rol,
    userName,
    token,
    isAuthenticated: !!token,
    isAdmin: rol === "administrador",
    email,
    address,
    phone,
  };
};
