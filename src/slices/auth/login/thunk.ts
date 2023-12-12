import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';
import api, { loginResource } from 'Services/Services';
import { jwtDecode } from "jwt-decode";

export const loginUser = (user: any, history: any) => async (dispatch: any) => {
  try {
    const response = await api.post(`${loginResource}`, {
      email: user.email,
      senha: user.password
    });

    const data = response.data;

    if (data && data.token) {
      const decodedToken = jwtDecode(data.token);

      const userData = {
        user: decodedToken,
        userImage: data.caminhoImagem
      };

      sessionStorage.setItem("authUser", JSON.stringify(userData));

      if (decodedToken) {
        dispatch(loginSuccess(decodedToken));
        history('/dashboard-demandas');
      }
    }
  } catch (error) {
    const errorMessage = "Usuário ou senha inválidos!";
    console.log(error);
    
    dispatch(apiError(errorMessage));

    setTimeout(() => {
      dispatch(apiError(""));
    }, 5000);
  }
};

export const logoutUser = () => async (dispatch: any) => {

  sessionStorage.removeItem("authUser");

};

export const resetLoginFlag = () => async (dispatch: any) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};


