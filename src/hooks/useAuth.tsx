const useAuth = () => {
  const isAuthenticated =
    JSON.parse(localStorage.getItem("token") as string) ===
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  console.log("🚀 ~ useAuth ~ isAuthenticated:", isAuthenticated);

  const user: { authenticated: boolean | null; name: string } = {
    authenticated: isAuthenticated,
    name: "Mojtaba",
  };
  return user;
};

export default useAuth;
