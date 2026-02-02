export const useAuth = () => {
  const rol = localStorage.getItem("r");
  const name = localStorage.getItem("n");
  const token = localStorage.getItem("t");
  return {
    rol,
    name,
    token,
    isAuthenticated: !!token,
    isAdmin: rol === "administrador",
  };
};
