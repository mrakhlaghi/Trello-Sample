// import { useAuth, hasAuthParams } from "react-oidc-context";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard.tsx";
import { DarkModeProvider } from "./context/DarkModeContext.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "./pages/NotFound.tsx";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.tsx";
// import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient();
  // const queryClient = new QueryClient({
  //   defaultOptions: { queries: { staleTime: Infinity } },
  // });

  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />

          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="not-found" element={<NotFound />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
