import React from "react";
import { Route, Routes } from "react-router-dom";
import { RedirectRoute } from "./components";
import { CompaniesList } from "./containers";
import { CompanyPage } from "./pages";
import { routes } from "./utils";

export const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path={routes.HOME} element={<CompaniesList/>} />
      <Route path={routes.companies.COMPANY} element={<CompanyPage/>} />
      <Route path="*" element={<RedirectRoute />} />
    </Routes>
  </div>
);
