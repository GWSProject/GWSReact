import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";

import DashboardDemandsReducer from "./dashboardDemands/reducer"


const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    DashboardDemands: DashboardDemandsReducer,

});

export default rootReducer;