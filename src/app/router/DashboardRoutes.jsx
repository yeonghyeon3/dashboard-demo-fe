import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard";
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default DashboardRoutes;