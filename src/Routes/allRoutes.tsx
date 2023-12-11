import { Navigate } from "react-router-dom";

//Dashboard
import DashboardDemands from "../pages/DashboardDemands";

//Segmentos
import CreateSegment from "pages/Segments/CreateSegment";
import SegmentList from "pages/Segments/SegmentList";

//Clientes
import CreateClient from "pages/Clients/CreateClient";
import ClientList from "pages/Clients/ClientList";

//Skills
import CreateHard from "pages/Skills/CreateHard";
import CreateSoft from "pages/Skills/CreateSoft";
import HardList from "pages/Skills/HardList";
import SoftList from "pages/Skills/SoftList";

//Profile
import Profile from '../pages/Profile/Profile/Profile/Profile';
import Settings from '../pages/Profile/Profile/Settings/Settings';

//login
import Login from "../pages/Autenticação/Login";
import Logout from "../pages/Autenticação/Logout";

const authProtectedRoutes = [
  //Dashboard
  { path: "/dashboard-demandas", component: <DashboardDemands /> },

  //Segments
  { path: "/cadastrar-segmento", component: <CreateSegment /> },
  { path: "/listar-segmentos", component: <SegmentList /> },

  //Clients
  { path: "/cadastrar-cliente", component: <CreateClient /> },
  { path: "/listar-clientes", component: <ClientList /> },

  //Skills
  { path: "/cadastrar-hard", component: <CreateHard /> },
  { path: "/cadastrar-soft", component: <CreateSoft /> },
  { path: "/listar-hard", component: <HardList /> },
  { path: "/listar-soft", component: <SoftList /> },

  //Pages
  { path: "/perfil", component: <Profile /> },

  { path: "/pages-profile-settings", component: <Settings /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Autentificação
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };