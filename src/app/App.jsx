import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardRoutes from './router/DashboardRoutes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<DashboardRoutes/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;