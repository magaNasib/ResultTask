import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { Text } from "@chakra-ui/react";
import Results from "./pages/Results";
import Live from "./pages/Live";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route path="live" index element={<Live />} />
          <Route path="results" element={<Results />} />
        </Route>
        <Route path="*" element={<Text>Not Found</Text>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
