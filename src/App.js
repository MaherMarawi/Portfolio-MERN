import Home from "./pages/home/Home"
import Admin from "./pages/admin/Admin"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const { darkMode } = useContext(DarkModeContext)
  const queryClient = new QueryClient()

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/adminPanel",
      element: <Admin />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
