import React from "react";
import Home from "./pages/home";
import UserPage from "./pages/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componets/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:user_id" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
