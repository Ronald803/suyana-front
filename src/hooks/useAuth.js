export const useAuth = () => {
  const rol = localStorage.getItem("r");
  const userName = localStorage.getItem("n");
  const token = localStorage.getItem("t");
  return {
    rol,
    userName,
    token,
    isAuthenticated: !!token,
    isAdmin: rol === "administrador",
  };
};
